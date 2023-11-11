import styles from './Gameboard.module.css';
import Card from '../card/Card';

const Gameboard = ({cards, handleCardClick}) => {
  return(
    <div className={styles.container}>
      <div className={styles.top}>
        <p className={styles.steps}>Ходов: 6</p>
        <button className={styles.restart}>Заново!</button>
      </div>
      <div className={styles.board}>
        {cards.map((card, index) => (
          <Card key={index} card={card} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  )
};

export default Gameboard;