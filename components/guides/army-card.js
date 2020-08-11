import styles from "./army-card.module.css";
import ArmyCardUnit from "./army-card-unit";
import useWindowSize from "../../lib/use-window-size";

function getSubtractDetails(units) {
  const [width] = useWindowSize();
  const unitWidth = 72;

  // Get the amount of space not occupied by the units...
  var cut;
  if (width <= 600) {
    cut = 148;
  } else if (width <= 768) {
    cut = 148;
  } else if (width <= 768) {
    cut = 212;
  } else if (width <= 992) {
    cut = 590;
  } else if (width <= 1200) {
    cut = 638;
  } else if (width <= 1366) {
    cut = 830;
  } else {
    cut = 1006;
  }

  // ...to determine the number of units we can display.
  var placeableUnitCount = Math.floor((width - cut) / unitWidth);

  // Return the number of units not displayed.
  var subtracted = units?.length - placeableUnitCount;
  return subtracted;
}

function ArmyCard({ era, guide }) {
  var subtracted = getSubtractDetails(guide?.units);

  // Make a shallow copy of the units, and display
  // only what can fit in the screen.
  // Those that cannot fit are displayed as a "more"
  // icon.
  var displayUnits = [...guide?.units];
  var more = <></>;
  if (subtracted > 0) {
    displayUnits.splice(
      guide?.units.length - subtracted - 1,
      guide?.units.length
    );
    more = (
      <div className={styles.moreContainer}>
        <span className={styles.more}>+{subtracted + 1}</span>
        <span className={`${styles.more} ${styles.moreSub}`}>more</span>
      </div>
    );
  }

  // Username is hidden if this is not an era army card.
  var username =
    era == null ? (
      <p className={styles.createdBy}>
        Created by
        <span className={styles.username}> {guide?.creator?.username}</span>
      </p>
    ) : (
      <></>
    );

  return (
    <div
      className={`${era != null ? styles.eraContainer : ""} ${
        styles.container
      }`}
    >
      <div className={styles.description}>
        <div className={styles.title}>
          <h2
            className={styles.heading}
            style={era == null ? {} : { color: era.color }}
          >
            {guide?.title}
          </h2>
          {username}
        </div>
        <p className={styles.paragraph}>{guide?.shortDescription}</p>
      </div>
      <div className={styles.units}>
        {displayUnits?.map((u) => (
          <ArmyCardUnit unit={u} key={u.id}></ArmyCardUnit>
        ))}
        {more}
      </div>
    </div>
  );
}

export default ArmyCard;
