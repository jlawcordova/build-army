import styles from "./pagination.module.css";

function Pagination({ low, high, selected }) {
  var content = [];
  low = 7;
  high = 13;
  selected = 7;
  for (let index = low; index <= high; index++) {
    content.push(index);
  }

  return (
    <ul className={styles.container}>
      {content.map((c) => (
        <li
          className={`${styles.item} ${selected == c ? styles.selected : ""} ${
            selected - 1 == c ? styles.selectedPrevious : ""
          }`}
        >
          {c}
        </li>
      ))}
    </ul>
  );
}

export default Pagination;
