import './Login.css';
import { Link } from 'react-router-dom';
import mascot from '../../img/UI/img-login.png';
import Header from '../header/Header';
import { useState, useEffect } from 'react';

const Login = ({ onLogin }) => {

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    setEmail('');
    setPassword('');
  }, [])

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePassChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  }
  
  return(
    <>
      <Header />
      <section className="container">
          <div className="login-container">
              <div className="form-container">
                  <img src={mascot} alt="illustration" className="illustration" />
                  <h1 className="opacity">ВХОД</h1>
                  <form onSubmit={handleSubmit}>
                      <input type="email" onChange={handleEmailChange} placeholder="Электронная почта" name="email" required minLength="4" maxLength="40" value={email} />
                      <input type="password" onChange={handlePassChange} placeholder="Пароль" required minLength="4" maxLength="40" value={password} />
                      <button className="opacity">Войти</button>
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