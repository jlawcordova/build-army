import styles from "./header.module.css";

function Header() {
  return (
    <header>
      <div className={styles.headerContainer}>
        <nav>
          <a>
            <img className={styles.logo} src="/images/logo/logo.svg" />
          </a>
          <div className={styles.navigationLinks}>
            <a className={`${styles.navigationLink} ${styles.selected}`}>
              Gallery
            </a>
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
