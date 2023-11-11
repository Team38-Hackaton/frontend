import styles from './NotFound.module.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return(
    <div className={styles.container}>
      <h1>Здесь ничего нет! 🥺</h1>
      <Link to='/'>Вернуться на главную</Link>
    </div>
  );
};

export default NotFound;