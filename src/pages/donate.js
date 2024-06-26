import React from "react";
import Layout from "@theme/Layout";
import Link from '@docusaurus/Link';
import BrowserOnly from "@docusaurus/BrowserOnly"

const url = "https://www.paypal.com/donate/?hosted_button_id=MP5VDJYTS6RQJ"
const text = "Paypal"
const color = "#003087"

const Redirect = () => {
  return (
    <BrowserOnly>
      {() => <script>
        {window.location.assign(url)}
        </script>}
    </BrowserOnly>
  );
};

export default function permanentRedirect(){
  return (
    <Layout title="Hello" description="Hello React Page">
    <Redirect></Redirect>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
          flexDirection:"column"
        }}>
        <h2>Redirecting... click below if it takes too long</h2>
        <Link
          className="button button--secondary button--lg"
          style={{
            backgroundColor: color,
            color: "white",
            border: "none"
          }}
          to={url}>
          {text}
        </Link>
      </div>
    </Layout>
  );
}