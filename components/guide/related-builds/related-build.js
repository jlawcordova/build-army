import Link from "next/link";
import styles from "./related-build.module.css";
import ArmyCardUnit from "../../guides/army-card-unit";

function RelatedBuild({ relatedBuild }) {
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
    <Link href={`/guide/${relatedBuild.id}`}>
      <a>
        <div className={styles.relatedBuildContainer}>
          <h3 className={styles.header}>{relatedBuild.title}</h3>
          <p className={styles.paragraph}>{relatedBuild.shortDescription}</p>
          <div className={styles.unitsContainer}>
            {displayUnits?.map((u) => (
              <div className={styles.unitContainer} key={u.id}>
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
    </Link>
  );
}

export default RelatedBuild;
