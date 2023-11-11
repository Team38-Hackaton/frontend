import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <header class={styles.header}>

      <div className={styles.logo}>
        <img src='./logo.png'></img>
      </div>

      <div className={styles.menu}>
        <div className={styles.avatar}>
          
        </div>

        <Link className={styles.button} to='/profile'>В профиль</Link>
        <Link className={styles.button} to='/logout'>Выйти</Link>
      </div>
    </header>
  )
};

export default Header;
