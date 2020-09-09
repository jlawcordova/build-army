import styles from "./body.module.css";
import GuideUnits from "./units";
import GuideLayout from "./layout";
import GuideDescription from "./description";
import GuideStats from "./stats/stats";

function GuideBody({ guide }) {
  return (
    <div className={styles.container}>
      <GuideUnits units={guide.units}></GuideUnits>
      <hr className={styles.separator} />
      <GuideLayout></GuideLayout>
      <hr className={styles.separator} />
      <GuideDescription></GuideDescription>
      <hr className={styles.separator} />
      <GuideStats
        era={guide.era}
        rank={guide.rank}
        units={guide.units}
      ></GuideStats>
    </div>
  );
}

export default GuideBody;
