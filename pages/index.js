import Layout from "../components/layout/layout";
import Gallery from "../components/gallery/gallery";
import { GetGuides, GetGuideRanks } from "../lib/guide-service";
import { GetCurrentEra } from "../lib/era-service";

const defaultRank = 14;

function Index({ era, guides, rank, availableRanks }) {
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

export default Index;

export async function getStaticProps() {
  var era = GetCurrentEra();
  var guides = GetGuides(era, defaultRank);

  return {
    props: {
      era: era,
      guides: guides,
      rank: defaultRank,
      availableRanks: GetGuideRanks(),
    },
  };
}
