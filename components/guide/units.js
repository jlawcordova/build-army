import styles from "./units.module.css";
import ArmyCardUnit from "../guides/army-card-unit";

function GuideUnits() {
  var units = [
    { id: "AB", count: 5 },
    { id: "WH", count: 5 },
    { id: "W", count: 2 },
    { id: "DK", count: 1 },
  ];

  return (
    <>
      <h4>Units</h4>
      <div className={styles.units}>
        {units?.map((u) => (
          <div className={styles.unit}>
            <ArmyCardUnit unit={u} key={u.id}></ArmyCardUnit>
          </div>
        ))}
      </div>
    </>
  );
}

export default GuideUnits;
