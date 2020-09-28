import RelatedBuild from "./related-build";

function RelatedBuilds() {
  return (
    <>
      <h2>Related Builds</h2>
      {[1, 2, 3].map((rb) => (
        <RelatedBuild key={rb}></RelatedBuild>
      ))}
    </>
  );
}

export default RelatedBuilds;
