import styles from "./rank-selector.module.css";
import Pagination from "./pagination";

function RankSelector({ rank, availableRanks }) {
  return (
    <div className={styles.rankSelectorContainer}>
      <h3 className={styles.label}>Select Your Rank</h3>
      <Pagination
        low={availableRanks[0]}
        high={availableRanks[availableRanks.length - 1]}
        selected={rank}
      ></Pagination>
    </div>
  );
}

export default RankSelector;
