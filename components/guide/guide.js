import styles from "./guide.module.css";
import GuideTitle from "./title";
import GuideBody from "./body";
import RelatedBuilds from "./related-builds/related-builds";

function Guide({ guide }) {
  return (
    <>
      <GuideTitle
        title={guide.title}
        creator={guide.creator}
        shortDescription={guide.shortDescription}
        likes={null}
      ></GuideTitle>
      <div className={styles.container}>
        <div className={styles.bodyContainer}>
          <GuideBody guide={guide}></GuideBody>
        </div>
        <div className={styles.relatedBuildsContainer}>
          <RelatedBuilds></RelatedBuilds>
        </div>
      </div>
    </>
  );
}

export default Guide;
