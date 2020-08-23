import styles from "./rank.module.css";

function RankStats() {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Rank</span>
      <span className={styles.content}>10</span>
    </div>
  );
}

export default RankStats;
