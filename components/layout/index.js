import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Fisrt Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </>
  );
}
