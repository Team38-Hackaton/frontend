import styles from './WinPopup.module.css';
import { Link } from 'react-router-dom';

const WinPopup = ({ setIsModalOpened }) => {

  function closeByOverlay (e) {
    if (e.target === e.currentTarget) {
      setIsModalOpened(false);
    }
  }

  const closeModal = () => {
    setIsModalOpened(false);
  }

  return(
    <div className={styles.bg} onClick={closeByOverlay}>
      <div className={styles.container}>
        <h2>Победа!</h2>
        <p className={styles.admire}>Мы восхищены твоими способностями! Продолжай!</p>
        <div className={styles.line} />
        <p className={styles.help}>А если ты хочешь помочь проявить способности и найти опору тому, кому не хватает поддержки прямо сейчас, загляни в фонд <Link className={styles.link} to=''>“Найди семью”.</Link></p>
        <p className={styles.love}>Жизнь начинается с любви 🧡</p>
        <button className={styles.close} onClick={closeModal} type="button" aria-label="Закрыть окно">OK</button>
      </div>
    </div>
  )
};

export default WinPopup;