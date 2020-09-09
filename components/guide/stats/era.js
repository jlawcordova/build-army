import styles from "./era.module.css";
import { GetEra } from "../../../lib/era-service";

function EraStats({ era }) {
  var era = GetEra(era);

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
