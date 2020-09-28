import Layout from "../../components/layout/layout";
import Guide from "../../components/guide/guide";
import {
  GetAllGuides,
  GetGuide,
  GetRelatedGuides,
} from "../../lib/guide-service";

function GuideLayout({ guide, relatedBuilds }) {
  return (
    <Layout>
      <Guide guide={guide} relatedBuilds={relatedBuilds}></Guide>
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
  var relatedBuilds = GetRelatedGuides(guide);

  return {
    props: {
      guide: guide,
      relatedBuilds: relatedBuilds,
    },
  };
}
