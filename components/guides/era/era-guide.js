import styles from "./era-guide.module.css";
import EraArmyCard from "./era-army-card";
import EraGuideHeader from "./era-guide-header";

function EraGuide() {
  var guides = [
    {
      id: "12345678901",
      title: "Swarm",
      shortDescription:
        "Overwhelm the opponent’s army with a swarm of fast, high damage units.",
      units: [
        { id: "SB", count: 6 },
        { id: "AR", count: 4 },
        { id: "BD", count: 3 },
        { id: "BW", count: 2 },
        { id: "BB", count: 1 },
      ],
    },
    {
      id: "a2345678902",
      title: "Spire Defense",
      shortDescription:
        "A defensive strategy which forces your opponent to fight on your side of the field under the powerful spire.",
      units: [
        { id: "SB", count: 8 },
        { id: "AR", count: 8 },
      ],
    },
  ];

  return (
    <>
      <EraGuideHeader></EraGuideHeader>
      <div className={styles.armyCardContainer}>
        {guides.map((g) => (
          <EraArmyCard guide={g} key={g.id}></EraArmyCard>
        ))}
      </div>
    </>
  );
}

export default EraGuide;
