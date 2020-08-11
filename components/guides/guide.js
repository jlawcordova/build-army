import styles from "./guide.module.css";
import ArmyCard from "./army-card";
import GuideHeader from "./guide-header";

function EraGuide({ era, guides, title, description }) {
  return (
    <>
      <GuideHeader
        era={era}
        title={title}
        description={description}
      ></GuideHeader>
      <div className={styles.armyCardContainer}>
        {guides.map((g) => (
          <ArmyCard guide={g} era={era} key={g.id}></ArmyCard>
        ))}
      </div>
    </>
  );
}

export default EraGuide;
