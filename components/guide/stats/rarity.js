import styles from "./rarity.module.css";

function RarityStats() {
  var rarities = {
    common: 0.8,
    rare: 0.2,
    mythic: 0,
  };
  const barWidth = 60;

  return (
    <div className={styles.container}>
      <span className={styles.title}>Rarity</span>
      <div className={styles.itemsContainer}>
        <div className={styles.item}>
          <span className={styles.itemLabel}>Common</span>
          <div className={styles.bar}>
            <div
              aria-label={`${rarities.common * 100}%`}
              className={styles.barFill}
              style={{ width: `${rarities.common * barWidth}px` }}
            ></div>
          </div>
        </div>
        <div className={styles.item}>
          <span className={styles.itemLabel}>Rare</span>
          <div className={styles.bar}>
            <div
              aria-label={`${rarities.rare * 100}%`}
              className={styles.barFill}
              style={{ width: `${rarities.rare * barWidth}px` }}
            ></div>
          </div>
        </div>
        <div className={styles.item}>
          <span className={styles.itemLabel}>Mythic</span>
          <div className={styles.bar}>
            <div
              aria-label={`${rarities.mythic * 100}%`}
              className={styles.barFill}
              style={{ width: `${rarities.mythic * barWidth}px` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RarityStats;
