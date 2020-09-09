import Layout from "../../components/layout/layout";
import Guide from "../../components/guide/guide";
import { GetAllGuides, GetGuide } from "../../lib/guide-service";

function GuideLayout({ guide }) {
  return (
    <Layout>
      <Guide guide={guide}></Guide>
    </Layout>
  );
}

export default GuideLayout;

export async function getStaticPaths() {
  const paths = GetAllGuides().map((guide) => ({
    params: {
      id: `${guide.id}`,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  var guide = GetGuide(params.id);

  return {
    props: {
      guide: guide
    },
  };
}