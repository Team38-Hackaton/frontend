import './Register.css';
import { Link } from 'react-router-dom';
import mascot from '../../img/UI/img-login.png';
import Header from '../header/Header';

const Register = ({onRegister}) => {

  return(
    <>
      <Header />

      <section className="container">
          <div className="login-container">
              {/* <div className="circle circle-one"></div> */}
              <div className="form-container">
                  <img src={mascot} alt="illustration" className="illustration" />
                  <h1 className="opacity">РЕГИСТРАЦИЯ</h1>
                  <form>
                      <input type="text" placeholder="Имя" />
                      <input type="email" placeholder="Электронная почта" />
                      <input type="password" placeholder="Пароль" />
                      <input type="password" placeholder="Повторите пароль" />
                      <button>Зарегистрироваться</button>
                  </form>
                  <div className="register-forget opacity">
                    <p>Уже с нами?</p>
                    <Link className="link" to='/login'>Войти</Link>
                  </div>
              </div>
              {/* <div className="circle circle-two"></div> */}
          </div>
        <div className="theme-btn-container"></div>
        <Link to='/'>Вернуться на главную</Link>
      </section>
    </>
  )
};

export default Register;