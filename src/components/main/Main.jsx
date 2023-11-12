import styles from './Main.module.css';
import Header from '../header/Header';
import Gameboard from '../gameboard/Gameboard';
import WinPopup from '../winPopup/WinPopup';
import { useState } from 'react';

const Main = ({ cardImages }) => {

  const [isModalOpened, setIsModalOpened] = useState(false);

  return(
    <div className={styles.container}>
      <Header />
      <div className={styles.subheadContainer}>
        <p className={styles.sunhead}>POV в большой семье Геометридзе много близнецов. Кликай на карточки и найди их всех.</p>
        <p className={styles.sunhead}>Чем меньше ходов потратишь, тем ты круче! 🧡</p>
      </div>
      <Gameboard cardImages={cardImages} setIsModalOpened={setIsModalOpened} />
      {isModalOpened && <WinPopup setIsModalOpened={setIsModalOpened} />}
    </div>
  )
};

export default Main;