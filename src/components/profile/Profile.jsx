import Footer from '../footer/Footer';
import Header from '../header/Header';
import styles from './Profile.module.css';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className={styles.container}>
    Ты сейчас на странице профиля.
      <Header />
      <Link to='/'>Вернуться обратно на главную</Link>
      <Footer />
    </div>
  );
};

export default Profile;