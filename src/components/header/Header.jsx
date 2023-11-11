import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <header class={styles.header}>

      <div className={styles.logo}>

      </div>

      <div className={styles.menu}>
        <div className={styles.avatar}>
        
        </div>

        <Link className={styles.button} to='/profile'>Профиль</Link>
        <Link className={styles.button} to='/logout'>Выход</Link>
      </div>
    </header>
  )
};

export default Header;
