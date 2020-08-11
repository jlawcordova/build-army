import Header from "./header";
import Head from "next/head";

function Layout({ children }) {
  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/85f88dfe1e.js"
          crossorigin="anonymous"
        ></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Patua+One&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header></Header>
      <main>{children}</main>
    </>
  );
}

export default Layout;
