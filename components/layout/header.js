import Link from "next/link";
import styles from "./header.module.css";

function Header() {
  return (
    <header>
      <div className={styles.headerContainer}>
        <nav>
          <Link href="/">
            <a>
              <img className={styles.logo} src="/images/logo/logo.svg" />
            </a>
          </Link>

          <div className={styles.navigationLinks}>
            <Link href="/">
              <a className={`${styles.navigationLink} ${styles.selected}`}>
                Gallery
              </a>
            </Link>
            <a className={styles.navigationLink}>Builder</a>
            <a className={styles.navigationLink}>Finder</a>
          </div>
          <button className={styles.signInButton}>Sign In</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
