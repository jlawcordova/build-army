import styles from "./army-card-unit.module.css";

const unitImage = {
  SB: "/images/units/shieldbearers_viking.png",
  AR: "/images/units/archer_ranger.png",
  BD: "/images/units/battle_drummer_festive.png",
  BW: "/images/units/battle_wagon_charger.png",
  BB: "/images/units/bombot_blanco.png",
};

function ArmyCardUnit({ unit }) {
  return (
    <div className={styles.container}>
      <img className={styles.unitImage} src={unitImage[unit?.id]} />
      <span className={styles.unitAmount}>{unit?.count}x</span>
    </div>
  );
}

export default ArmyCardUnit;
