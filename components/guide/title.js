import styles from "./title.module.css";

function GuideTitle({ title, creator, shortDescription, likes }) {
  return (
    <div className={styles.container}>
      {LikesDisplay(likes)}
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          <h1 className={styles.heading}>{title}</h1>
          <div className={styles.createdContainer}>
            <span className={styles.createdLabel}>Created by </span>
            <span>{creator.username}</span>
          </div>
        </div>
        <p className={styles.description}>{shortDescription}</p>
      </div>
    </div>
  );
}

function LikesDisplay(likes) {
  return likes == null ? (
    <div className={styles.likePlaceholder}></div>
  ) : (
    <div className={styles.likeContainer}>
      <i
        aria-hidden
        className={`fas fa-chevron-up ${true ? styles.voted : ""}`}
      ></i>
      <span>{likes}</span>
      <i
        aria-hidden
        className={`fas fa-chevron-down ${false ? styles.voted : ""}`}
      ></i>
    </div>
  );
}

export default GuideTitle;
