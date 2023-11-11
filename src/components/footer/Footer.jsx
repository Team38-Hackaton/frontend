import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      Это футер.
      <p className={styles.header}>Memory card game by Team38</p>
      <p className={styles.item}>Ссылка на репозиторий проекта: <Link className={styles.link} to=''>Memory game</Link></p>
     
      <div className={styles.credits}>
        <p className={styles.header}>Ссылки на репозитории членов команды</p>

        <div className={styles.links}>
          <Link className={styles.link} to=''></Link>
        </div>
      </div>

      <p className={styles.item}>Copyright &copy;&nbsp;{new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;