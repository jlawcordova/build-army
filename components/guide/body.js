import styles from "./body.module.css";
import GuideUnits from "./units";
import GuideLayout from "./layout";
import GuideDescription from "./description";
import GuideStats from "./stats/stats";

function GuideBody() {
  return (
    <div className={styles.container}>
      <GuideUnits></GuideUnits>
      <hr className={styles.separator} />
      <GuideLayout></GuideLayout>
      <hr className={styles.separator} />
      <GuideDescription></GuideDescription>
      <hr className={styles.separator} />
      <GuideStats></GuideStats>
    </div>
  );
}

export default GuideBody;
