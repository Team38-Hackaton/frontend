import './Register.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import mascot from '../../img/UI/img-login.png';
import Header from '../header/Header';

const Register = ({onRegister}) => {

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    setEmail('');
    setPassword('');
    setUsername('');
  }, [])

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePassChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(username, email,password);
  }

  return(
    <>
      <Header />
      <section className="container">
          <div className="login-container">
              {/* <div className="circle circle-one"></div> */}
              <div className="form-container">
                  <img src={mascot} alt="Иллюстрация" className="illustration" />
                  <h1 className="opacity">РЕГИСТРАЦИЯ</h1>
                  <form onSubmit={handleSubmit}>
                      <input type="text" onChange={handleUsernameChange} placeholder="Имя" name="username" required minLength="2" maxLength="40" value={username}/>
                      <input type="email" onChange={handleEmailChange} placeholder="Электронная почта" name="email" required minLength="4" maxLength="40" value={email}/>
                      <input type="password" onChange={handlePassChange} placeholder="Пароль" required minLength="4" maxLength="40" value={password} />
                      <button className="opacity">Зарегистрироваться</button>
                  </form>
                  <div className="register-forget opacity">
                    <p>Уже с нами?</p>
                    <Link to='/login'>Войти</Link>
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