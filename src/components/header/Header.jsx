import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const Header = ({ onLogout }) => {

  const currentUser = useContext(CurrentUserContext);
  const displayName = currentUser.name ? currentUser.name : 'друг';


  return(
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to='/' className={styles.logolink}><img src='./logo.png' alt='Лого проекта' /></Link>
        <p className={styles.username}>Привет, <span className={styles.underline}>{displayName}</span> !</p>
      </div>
      <div className={styles.menu}>
      {currentUser.name
        ? <button onClick={onLogout} className={styles.logout}>Выйти</button>
        : <Link className={styles.button} to='/login'>Вход</Link>
      }
      </div>
    </header>
  )
};

export default Header;
