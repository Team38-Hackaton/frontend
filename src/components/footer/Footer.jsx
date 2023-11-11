import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.about}>
        <div className={styles.aboutHackaton}>
          <p className={styles.header}>Как появилась игра?</p>
          <p className={styles.item}>Эта игра была создана в рамках благотворительного хакатона для джунов от
            <Link className={styles.link} to='https://t.me/natti_jun_front_chat'> "Чата джунов" Наташи Давыдовой</Link>
            <span> и </span> 
            <Link className={styles.link} to='https://sirota.ru/'>НКО "Найди семью"</Link>
            .</p>
        </div>
        <div className={styles.aboutHackaton}>
          <p className={styles.header}>Команда, работавшая над проектом</p>
          <p className={styles.item}>
            <Link className={styles.link} to='https://github.com/bellabzhu'>Белла (Фронт)</Link>, <Link className={styles.link} to='https://github.com/AndersGrunge'>Андрей (Бэк)</Link> и <Link className={styles.link} to='https://github.com/Lirmortoch'>Дима (Фронт)</Link>.
          </p>
        </div>
        <div className={styles.aboutHackaton}>
          <p className={styles.header}>Ссылки</p>
          <Link className={styles.link} to='https://memory-game-nine-gamma.vercel.app'>Деплой</Link><span> и </span>
          <Link className={styles.link} to='https://memory-game-nine-gamma.vercel.app'>GitHub</Link>
        </div>
      </div>
      <p className={styles.item}>P.S. иллюстрации взяты с Freepik</p>
      <p className={styles.year}>💚 {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;