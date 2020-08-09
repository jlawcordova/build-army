import styles from "./rank-selector.module.css";
import Pagination from "../utils/pagination";

function RankSelector() {
  return (
    <div className={styles.rankSelectorContainer}>
      <h3 className={styles.label}>Select Your Rank</h3>
      <Pagination low="7" high="13" selected="10"></Pagination>
    </div>
  );
}

export default RankSelector;
