import Head from "next/head";
import Layout from "../components/layout/layout";
import Jumbotron from "../components/rank/jumbotron";
import EraGuide from "../components/guides/era/era-guide";

function Gallery() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Patua+One&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Layout>
        <Jumbotron></Jumbotron>
        <EraGuide></EraGuide>
      </Layout>
    </>
  );
}

export default Gallery;
