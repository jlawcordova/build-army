import RelatedBuild from "./related-build";

function RelatedBuilds({ relatedBuilds }) {
  return (
    <>
      <h2>Related Builds</h2>
      {relatedBuilds.map((rb) => (
        <RelatedBuild key={rb.id} relatedBuild={rb}></RelatedBuild>
      ))}
    </>
  );
}

export default RelatedBuilds;
