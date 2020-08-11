import Link from "next/link";
import styles from "./pagination.module.css";

function Pagination({ low, high, selected }) {
  var content = [];
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
          key={c}
        >
          <Link href={`/rank/${c}`}>
            <a>{c}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Pagination;
