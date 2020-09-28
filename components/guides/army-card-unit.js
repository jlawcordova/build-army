import styles from "./army-card-unit.module.css";

const unitImage = {
  AA: "/images/units/arcane_archer_arcane.png",
  AB: "/images/units/arcane_blades_plated.png",
  A: "/images/units/assassins_rogue.png",
  AR: "/images/units/archer_ranger.png",
  BM: "/images/units/barrier_monk_harmony.png",
  BD: "/images/units/battle_drummer_festive.png",
  BW: "/images/units/battle_wagon_charger.png",
  BB: "/images/units/bombot_blanco.png",
  B: "/images/units/brute_smithy.png",
  C: "/images/units/catapult_robust.png",
  DK: "/images/units/death_knight_gothic.png",
  CS: "/images/units/crystal_spire_crystal.png",
  EE: "/images/units/earth_elemental_bedrock.png",
  EF: "/images/units/emberfiend_ember.png",
  ER: "/images/units/entangling_roots_thorns.png",
  F: "/images/units/fortification_stonewall.png",
  FT: "/images/units/freezing_trap_spiked.png",
  FK: "/images/units/faceless_knights_crestfallen.png",
  FW: "/images/units/frost_wizard_arctic.png",
  HT: "/images/units/hammer_throwers_smith.png",
  MS: "/images/units/mindshrooms_funky.png",
  P: "/images/units/paladin_saint.png",
  PT: "/images/units/plague_throwers_chemist.png",
  SB: "/images/units/shieldbearers_viking.png",
  SC: "/images/units/stormcaller_shaman.png",
  TG: "/images/units/thornguards_metallic.png",
  UB: "/images/units/untamed_beast_troll.png",
  WH: "/images/units/war_hounds_bulldogs.png",
  W: "/images/units/wraiths_oathbreaker.png",
  MC: "/images/units/mind_corruptor_eldritch.png",
};

function ArmyCardUnit({ unit, showCount = true, size = "normal" }) {
  var sizeStyle = size == "normal" ? styles.normal : styles.small;

  return (
    <div className={styles.container}>
      <img
        className={`${styles.unitImage} ${sizeStyle}`}
        src={unitImage[unit?.id]}
      />
      {showCount ? (
        <span className={styles.unitAmount}>{unit?.count}x</span>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ArmyCardUnit;
