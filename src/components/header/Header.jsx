import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <header class={styles.container}>
      Это хедер.
      <Link to='/profile'>Это ссылка на профиль</Link>
    </header>
  )
};

export default Header;
