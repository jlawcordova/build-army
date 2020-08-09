import styles from "./era-guide-header.module.css";

function EraGuideHeader({ era }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>The Great Plague</h1>
      <h3 className={styles.subheading}>
        The best army builds to use in this era.
      </h3>
    </div>
  );
}

export default EraGuideHeader;
