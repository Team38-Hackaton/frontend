import styles from './Main.module.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Gameboard from '../gameboard/Gameboard';

const Main = ({cards}) => {
  return(
    <div className={styles.container}>
      <Header />
      <Gameboard cards={cards} />
      <Footer />
    </div>
  )
};

export default Main;