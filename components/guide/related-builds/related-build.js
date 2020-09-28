import styles from "./related-build.module.css";
import ArmyCardUnit from "../../guides/army-card-unit";

function RelatedBuild() {
  var relatedBuild = {
    id: "1-swarm",
    title: "Swarm",
    shortDescription:
      "Overwhelm the opponent’s army with a swarm of fast, high damage units.",
    units: [
      { id: "AB", count: 5 },
      { id: "WH", count: 5 },
      { id: "W", count: 2 },
      { id: "DK", count: 1 },
      { id: "CS", count: 1 },
    ],
    creator: {
      username: "jlawcordova",
    },
    rank: 10,
    era: 1,
  };

  var displayUnits = [...relatedBuild?.units];
  var more = <></>;
  if (displayUnits.length > 4) {
    displayUnits.splice(3, displayUnits.length - 1);
    more = (
      <div className={styles.moreContainer}>
        <span className={styles.more}>+{relatedBuild?.units.length - 3}</span>
        <span className={`${styles.more} ${styles.moreSub}`}>more</span>
      </div>
    );
  }

  return (
    <a href="">
      <div className={styles.relatedBuildContainer}>
        <h3 className={styles.header}>{relatedBuild.title}</h3>
        <p className={styles.paragraph}>{relatedBuild.shortDescription}</p>
        <div className={styles.unitsContainer}>
          {displayUnits?.map((u) => (
            <div className={styles.unitContainer}>
              <ArmyCardUnit
                unit={u}
                showCount={false}
                size={"small"}
              ></ArmyCardUnit>
            </div>
          ))}
          {more}
        </div>
      </div>
    </a>
  );
}

export default RelatedBuild;
