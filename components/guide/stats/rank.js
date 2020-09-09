import styles from "./rank.module.css";

function RankStats({ rank }) {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Rank</span>
      <span className={styles.content}>{rank}</span>
    </div>
  );
}

export default RankStats;
