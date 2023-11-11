import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.header}>Memory card game by Team38</p>
      <p className={styles.item}>Ссылка на репозиторий проекта: <Link className={styles.link} to=''>Memory game</Link></p>
     
      <div className={styles.credits}>
        <p className={styles.credits_header}>Ссылки на профили членов команды</p>

        <div className={styles.links}>
          <Link className={styles.link} to='https://github.com/bellabzhu'>Bella</Link>
          <Link className={styles.link} to='https://github.com/AndersGrunge'>Andrei</Link>
          <Link className={styles.link} to='https://github.com/Lirmortoch'>Lirmortoch</Link>
        </div>
      </div>

      <p className={styles.item}>Все картинки взяты с Freepic</p>
      <p className={styles.item}>Copyright &copy;&nbsp;{new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;