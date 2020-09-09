import Layout from "../../components/layout/layout";
import Gallery from "../../components/gallery/gallery";
import { GetGuides, GetGuideRanks } from "../../lib/guide-service";
import { GetCurrentEra } from "../../lib/era-service";

function RankGallery({ era, guides, rank, availableRanks }) {
  return (
    <>
      <Layout>
        <Gallery
          era={era}
          guides={guides}
          rank={rank}
          availableRanks={availableRanks}
        ></Gallery>
      </Layout>
    </>
  );
}

export default RankGallery;

export async function getStaticPaths() {
  const paths = GetGuideRanks().map((rank) => ({
    params: {
      rank: `${rank}`,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  var era = GetCurrentEra();
  var guides = GetGuides(era, params.rank);
  var availableRanks = GetGuideRanks();

  return {
    props: {
      era: era,
      guides: guides,
      rank: params.rank,
      availableRanks: availableRanks,
    },
  };
}
