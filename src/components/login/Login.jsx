import './Login.css';
import { Link } from 'react-router-dom';
import mascot from '../../img/UI/img-login.png';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Login = () => {
  
  return(
    <>
      <Header />
      <Link to='/'>К игре</Link>
      <section class="container">
          <div class="login-container">
              <div class="circle circle-one"></div>
              <div class="form-container">
                  <img src={mascot} alt="illustration" class="illustration" />
                  <h1 class="opacity">ВХОД</h1>
                  <form>
                      <input type="text" placeholder="Имя" />
                      <input type="email" placeholder="Электронная почта" />
                      <input type="password" placeholder="Пароль" />
                      <button class="opacity">Войти</button>
                  </form>
                  <div class="register-forget opacity">
                    <p>Первый раз здесь?</p>
                    <Link to='/register'>Зарегистрироваться</Link>
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

export default Login;