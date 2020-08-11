import Jumbotron from "../rank/jumbotron";
import Guide from "../guides/guide";

function Gallery({ era, guides, rank, availableRanks }) {
  return (
    <>
      <Jumbotron rank={rank} availableRanks={availableRanks}></Jumbotron>
      <Guide era={era} guides={guides}></Guide>
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
