import styles from "./guide.module.css";
import GuideTitle from "./title";
import GuideBody from "./body";
import RelatedBuilds from "./related-builds/related-builds";

function Guide({ guide, relatedBuilds }) {
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
          <RelatedBuilds relatedBuilds={relatedBuilds}></RelatedBuilds>
        </div>
      </div>
    </>
  );
}

export default Guide;
