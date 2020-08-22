import Jumbotron from "../rank/jumbotron";
import Guides from "../guides/guides";

function Gallery({ era, guides, rank, availableRanks }) {
  return (
    <>
      <Jumbotron rank={rank} availableRanks={availableRanks}></Jumbotron>
      <Guides era={era} guides={guides}></Guides>
      {/* 
        TODO: Include community guide.
        <Guide
        title={"Community Builds"}
        description={"Custom builds made by the community."}
        guides={guides}
      ></Guide> */}
    </>
  );
}

export default Gallery;
