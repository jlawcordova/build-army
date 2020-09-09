import styles from "./units.module.css";
import ArmyCardUnit from "../guides/army-card-unit";

function GuideUnits({ units }) {

  return (
    <>
      <h4>Units</h4>
      <div className={styles.units}>
        {units?.map((u) => (
          <div className={styles.unit}  key={u.id}>
            <ArmyCardUnit unit={u} key={u.id}></ArmyCardUnit>
          </div>
        ))}
      </div>
    </>
  );
}

export default GuideUnits;
