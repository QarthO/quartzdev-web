FROM node:24.15.0-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN corepack enable pnpm && pnpm install --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN corepack enable pnpm && pnpm build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 app

COPY --from=builder --chown=app:nodejs /app/package.json ./package.json
COPY --from=builder --chown=app:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=app:nodejs /app/dist ./dist

USER app

EXPOSE 3000

ENV PORT=3000

HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
  CMD node -e 'fetch(`http://127.0.0.1:${process.env.PORT || 3000}/api/health`, { signal: AbortSignal.timeout(5000) }).then(r => process.exit(r.ok ? 0 : 1)).catch(() => process.exit(1))'

CMD ["./node_modules/.bin/srvx", "--prod", "--dir=.", "--static=dist/client", "--entry=dist/server/server.js"]
