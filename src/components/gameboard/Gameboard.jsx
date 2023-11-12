import styles from './Gameboard.module.css';
import Card from '../card/Card';
import { useState, useEffect } from 'react';

const Gameboard = ({ cardImages }) => {

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    if(card.id === choiceOne?.id) return;
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
    setDisabled(false);
  }

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return {...card, matched: true }
            } else {
              return card;
            }
          })
        })
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 500);
      }
    }
  }, [choiceOne, choiceTwo]);

  useEffect(() => {
    shuffleCards();
  }, []);


  return (
    <div className={styles.container}>
      <div className={styles.super1}></div>
      <div className={styles.super2}></div>
      <div className={styles.top}>
        <p className={styles.steps}>Ходов: {turns}</p>
        <button className={styles.restart} onClick={shuffleCards}>Заново!</button>
      </div>
      <div className={styles.board}>
        {cards.map((card, index) => (
          <Card
            key={index} 
            card={card}
            flipped={card.id === choiceOne?.id || card.id === choiceTwo?.id || card.matched}
            handleChoice={handleChoice}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  )
};

export default Gameboard;