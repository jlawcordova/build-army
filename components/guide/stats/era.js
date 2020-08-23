import styles from "./era.module.css";

function EraStats({ era }) {
  era = {
    id: "1",
    title: "Age of Eternal Winter",
    color: "#7BE7FF",
    background: "/images/background/era-header.png",
  };

  return (
    <div className={styles.container}>
      <span className={styles.title}>Era</span>
      <span className={styles.content} style={{ color: era.color }}>
        {era.title}
      </span>
    </div>
  );
}

export default EraStats;
