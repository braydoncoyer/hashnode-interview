import Head from "next/head";
import { Navbar } from "./Navbar";

const PageLayout = (props) => (
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
    <div>{props.children}</div>
  </>
);

export { PageLayout };
