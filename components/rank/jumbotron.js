import styles from "./jumbotron.module.css";
import RankSelector from "./rank-selector";

function Jumbotron() {
  return (
    <div className={styles.jumbotron}>
      <h1 className={styles.heading}>Builds for Battle Legion</h1>
      <p className={styles.paragraph}>
        Discover army builds you can use to climb the Battle Legion rank ladder
        <br />
        ...or just try some out for fun.
      </p>
      <RankSelector></RankSelector>
    </div>
  );
}

export default Jumbotron;
