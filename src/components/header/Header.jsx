import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const userName = 'Петя';

  return(
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to='/' className={styles.logolink}><img src='./logo.png' alt='Лого проекта' /></Link>
        <p className={styles.username}>Привет, <span className={styles.underline}>{userName}</span> !</p>
      </div>
      <div className={styles.menu}>
        <Link className={styles.button} to='/register'>Рег(врем)</Link>
        <Link className={styles.button} to='/logout'>Выйти</Link>
      </div>
    </header>
  )
};

export default Header;
