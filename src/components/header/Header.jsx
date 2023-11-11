import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <header className={styles.header}>

      <div className={styles.logo}>
        <img src='./logo.png' alt='Лого проекта'></img>
        <p>Привет, Петя!</p>
      </div>

      <div className={styles.menu}>
        <Link className={styles.button} to='/profile'>В профиль</Link>
        <Link className={styles.button} to='/logout'>Выйти</Link>
      </div>
    </header>
  )
};

export default Header;
