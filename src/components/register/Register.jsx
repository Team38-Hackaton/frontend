import './Register.css';
import { Link } from 'react-router-dom';
import mascot from '../../img/UI/img-login.png';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Register = () => {
  return(
    <>
      <Header />
      <Link to='/'>К игре</Link>
      <section class="container">
          <div class="login-container">
              <div class="circle circle-one"></div>
              <div class="form-container">
                  <img src={mascot} alt="illustration" class="illustration" />
                  <h1 class="opacity">РЕГИСТРАЦИЯ</h1>
                  <form>
                      <input type="text" placeholder="Имя" />
                      <input type="email" placeholder="Электронная почта" />
                      <input type="password" placeholder="Пароль" />
                      <input type="password" placeholder="Повторите пароль" />
                      <button class="opacity">Зарегистрироваться</button>
                  </form>
                  <div class="register-forget opacity">
                    <p>Уже с нами?</p>
                    <Link to='/login'>Войти</Link>
                  </div>
              </div>
              <div class="circle circle-two"></div>
          </div>
          <div class="theme-btn-container"></div>
      </section>

      <Footer />
    </>
  )
};

export default Register;