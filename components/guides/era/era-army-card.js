import styles from "./era-army-card.module.css";
import ArmyCardUnit from "../army-card-unit";

function EraArmyCard({ guide }) {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <h2 className={styles.heading}>{guide?.title}</h2>
        <p className={styles.paragraph}>{guide?.shortDescription}</p>
      </div>
      <div className={styles.units}>
        {guide?.units.map((u) => (
          <ArmyCardUnit unit={u} key={u.id}></ArmyCardUnit>
        ))}
      </div>
    </div>
  );
}

export default EraArmyCard;
