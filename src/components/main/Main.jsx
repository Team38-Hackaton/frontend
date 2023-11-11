import styles from './Main.module.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Gameboard from '../gameboard/Gameboard';

const Main = () => {
  return(
    <div class={styles.container}>
      <Header />
      <Gameboard />
      <Footer />
    </div>
  )
};

export default Main;