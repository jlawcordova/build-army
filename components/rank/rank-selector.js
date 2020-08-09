import styles from "./rank-selector.module.css";
import Pagination from "../utils/pagination";

function RankSelector() {
  return (
    <div className={styles.rankSelectorContainer}>
      <h3 className={styles.label}>Select Your Rank</h3>
      <Pagination low={5} high={14} selected={10}></Pagination>
    </div>
  );
}

export default RankSelector;
