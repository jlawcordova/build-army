import Layout from "../components/layout/layout";
import Gallery from "../components/gallery/gallery";
import { GetEra, GetGuides, GetGuideRanks } from "../lib/guide-service";

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
  var era = GetEra();
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
