import styles from "./stats.module.css";
import EraStats from "./era";
import RankStats from "./rank";
import RarityStats from "./rarity";

function GuideStats({ era, rank, units }) {
  return (
    <>
      <h4>Stats</h4>
      <div className={styles.statsContainer}>
        <EraStats era={era}></EraStats>
        <RankStats rank={rank}></RankStats>
        <RarityStats units={units}></RarityStats>
      </div>
    </>
  );
}

export default GuideStats;
