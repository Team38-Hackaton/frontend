import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.about}>
        <div className={styles.aboutHackaton}>
          <p className={styles.header}>Как появилась игра?</p>
          <p className={styles.item}>Эта игра была создана в рамках благотворительного хакатона для джунов от "Чата джунов" Наташи Давыдовой и НКО "Найди семью".</p>
        </div>

        <div className={styles.credits}>
          <p className={styles.header}>Команда, работавшая над проектом</p>

          <p className={styles.item}>
          <Link className={styles.link} to='https://github.com/bellabzhu'>Белла</Link>, <Link className={styles.link} to='https://github.com/AndersGrunge'>Андрей</Link> и <Link className={styles.link} to='https://github.com/Lirmortoch'>Дима</Link>
          </p>

          <div className={styles.projectLink}>
            <p className={styles.header}>Ссылка на проект</p>
            <p className={styles.item}>
            <Link className={styles.link} to='https://memory-game-nine-gamma.vercel.app'>Memory card game</Link>
              </p>
          </div>
        </div>
      </div>

      <p className={styles.item}>Все картинки взяты с Freepik</p>
      <p className={styles.item}>&copy;&nbsp;{new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;