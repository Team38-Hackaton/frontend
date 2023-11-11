import Header from '../header/Header';
import styles from './Profile.module.css';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Link to='/'>Вернуться на главную</Link>
    </div>
  );
};

export default Profile;