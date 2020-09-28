import styles from "./footer.module.css";

function Footer() {
  return (
    <footer>
      <p className={styles.creator}>Made with ♥ by jlawcordova</p>
      <p className={styles.disclaimer}>
        Build Army is not endorsed by Traplight and doesn’t reflect the views or
        opinions of Traplight or anyone officially involved in producing or
        managing Battle Legion. Battle Legion and Traplight are trademarks or
        registered trademarks of Traplight.
      </p>
    </footer>
  );
}

export default Footer;
