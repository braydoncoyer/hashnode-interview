import Head from "next/head";
import { Navbar } from './Navbar';

const Layout = (props) => (
  <>
    <Head>
      <title>{props.title || ""}</title>
      <meta name="description" content={props.description || ""} />
      <link rel="icon" sizes="192x192" href="/static/images/icons-192.png" />
      <link rel="apple-touch-icon" href="/static/images/icons-192.png" />
      <link rel="icon" href="/static/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
    </Head>

    <Navbar />
    <div className="max-w-4xl mx-auto px-4 mt-8">{props.children}</div>
  </>
);

export  { Layout };
