import styles from "./guide.module.css";
import GuideTitle from "./title";
import GuideBody from "./body";

function Guide() {
  return (
    <>
      <GuideTitle></GuideTitle>
      <div className={styles.container}>
        <div className={styles.bodyContainer}>
          <GuideBody></GuideBody>
        </div>
      </div>
    </>
  );
}

export default Guide;
