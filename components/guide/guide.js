import styles from "./guide.module.css";
import GuideTitle from "./title";
import GuideBody from "./body";

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
      </div>
    </>
  );
}

export default Guide;
