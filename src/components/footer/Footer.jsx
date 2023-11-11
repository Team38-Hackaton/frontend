import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      Это футер.
      <p className={styles.header}>Игра от команды 38</p>
      <hr className={styles.line} />
      <div className={styles.credits}>
        <p className={styles.item}>&copy;&nbsp;{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;