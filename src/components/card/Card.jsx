import styles from './Card.module.css';

const Card = ({card, onClick}) => {

  return(
    <div className={styles.card} onClick={onClick}>
      <div className={styles.unflipped}></div>
    </div>
  )
};

export default Card;