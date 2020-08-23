import styles from "./stats.module.css";
import EraStats from "./era";
import RankStats from "./rank";
import RarityStats from "./rarity";

function GuideStats() {
  return (
    <>
      <h4>Stats</h4>
      <div className={styles.statsContainer}>
        <EraStats></EraStats>
        <RankStats></RankStats>
        <RarityStats></RarityStats>
      </div>
    </>
  );
}

export default GuideStats;
