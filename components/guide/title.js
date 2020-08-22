import styles from "./title.module.css";

function GuideTitle() {
  return (
    <div className={styles.container}>
      <div className={styles.likeContainer}>
        <i className={`fas fa-chevron-up ${true ? styles.voted : ""}`}></i>
        <span>2</span>
        <i className={`fas fa-chevron-down ${false ? styles.voted : ""}`}></i>
      </div>
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          <h1 className={styles.heading}>Swarm</h1>
          <div className={styles.createdContainer}>
            <span className={styles.createdLabel}>Created by </span>
            <a href="">
              <span>jlawcordova</span>
            </a>
          </div>
        </div>
        <p className={styles.description}>
          A defensive strategy which forces your opponent to fight on your side
          of the field under the powerful spire. Lorem ipsum dorlor amet Lorem
          ipsum dorlor ametLorem ipsum dorlor amet.
        </p>
      </div>
    </div>
  );
}

export default GuideTitle;
