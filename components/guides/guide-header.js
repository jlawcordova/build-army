import styles from "./guide-header.module.css";

function GuideHeader({ era, title, description }) {
  const eraDescription = "The best army builds to use in this era.";
  return (
    <div
      className={styles.container}
      style={
        era == null ? {} : { backgroundImage: "url(" + era.background + ")" }
      }
    >
      <h1
        className={styles.heading}
        style={era != null ? { color: era.color } : {}}
      >
        {era != null ? era.title : title}
      </h1>
      <h3 className={styles.subheading}>
        {era != null ? eraDescription : description}
      </h3>
    </div>
  );
}

export default GuideHeader;
