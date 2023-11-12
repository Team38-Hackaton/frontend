import './Login.css';
import { Link } from 'react-router-dom';
import mascot from '../../img/UI/img-login.png';
import Header from '../header/Header';

const Login = () => {
  
  return(
    <>
      <Header />
      <Link to='/'>К игре</Link>
      <section className="container">
          <div className="login-container">
              <div className="form-container">
                  <img src={mascot} alt="illustration" className="illustration" />
                  <h1 className="opacity">ВХОД</h1>
                  <form>
                      <input type="text" placeholder="Имя" />
                      <input type="email" placeholder="Электронная почта" />
                      <input type="password" placeholder="Пароль" />
                      <button>Войти</button>
                  </form>
                  <div className="register-forget opacity">
                    <p>Первый раз здесь?</p>
                    <Link className="link" to='/register'>Зарегистрироваться</Link>
                  </div>
              </div>
          </div>
          <div className="theme-btn-container"></div>
      </section>
    </>
  )
};

export default Login;