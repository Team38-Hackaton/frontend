import styles from './Main.module.css';
import Header from '../header/Header';
import Gameboard from '../gameboard/Gameboard';

const Main = ({ cardImages }) => {
  return(
    <div className={styles.container}>
      <Header />
      <div className={styles.subheadContainer}>
        <p className={styles.sunhead}>POV ты кликаешь на карточки и ищешь одинаковые картинки.</p>
        <p className={styles.sunhead}>Чем меньше ходов потратишь, тем ты круче! 💛</p>
      </div>
      <Gameboard cardImages={cardImages} />
    </div>
  )
};

export default Main;