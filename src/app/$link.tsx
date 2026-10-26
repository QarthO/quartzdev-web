import { createFileRoute, notFound, redirect } from '@tanstack/react-router'

import { destinations, isLinkPath } from '@/content/links'

export const Route = createFileRoute('/$link')({
  beforeLoad: ({ params }) => {
    const path = `/${params.link}`
    if (!isLinkPath(path)) throw notFound()

    throw redirect({
      href: destinations[path],
      statusCode: 302,
      headers: { 'Cache-Control': 'no-store' },
    })
  },
})
