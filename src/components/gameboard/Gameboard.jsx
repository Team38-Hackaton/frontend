import styles from './Gameboard.module.css';
import Card from '../card/Card';
import { useState, useEffect, useRef } from 'react';

const Gameboard = ({ cardImages, setIsModalOpened }) => {

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const boardRef = useRef(null);

  const initialShuffle = () => {
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }));
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  }

  const shuffleCards = () => {
    boardRef.current.style.opacity = 0;
    setTimeout(() => {
      const shuffledCards = [...cardImages, ...cardImages]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: Math.random() }));
        setChoiceOne(null);
        setChoiceTwo(null);
        setCards(shuffledCards);
        setTurns(0);
    }, 500);
    setTimeout(() => {
      boardRef.current.style.opacity = 1;
    }, 1000);
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
          const updatedCards = prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
          if (updatedCards.every(card => card.matched)) {
            setIsModalOpened(true);
          }
          return updatedCards;
        })
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 500);
      }
    }
  }, [choiceOne, choiceTwo]);

  useEffect(() => {
    initialShuffle();
  }, []);


  return (
    <div className={styles.container}>
      <div className={styles.super1}></div>
      <div className={styles.super2}></div>
      <div className={styles.top}>
        <p className={styles.steps}>Ходов: {turns}</p>
        <button className={styles.restart} onClick={shuffleCards}>Заново!</button>
      </div>
      <div className={styles.board} ref={boardRef}>
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