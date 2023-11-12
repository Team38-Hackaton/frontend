import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { register, login, logout } from '../utils/Api';
import { useState } from 'react';
import './App.css';
import Profile from './profile/Profile';
import Main from './main/Main';
import NotFound from './notFound/NotFound';
import Register from './register/Register';
import Login from './login/Login';
import Footer from './footer/Footer';

const cardImages = [
  { "src": "/cards/card1.jpg", matched: false },
  { "src": "/cards/card2.jpg", matched: false },
  { "src": "/cards/card3.jpg", matched: false },
  { "src": "/cards/card4.jpg", matched: false },
  { "src": "/cards/card5.jpg", matched: false },
  { "src": "/cards/card6.jpg", matched: false },
  { "src": "/cards/card7.jpg", matched: false },
  { "src": "/cards/card8.jpg", matched: false },
]

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [currentUser, setCurrentUser] = useState({ name: '', email: '' });
  const navigate = useNavigate();

  const handleRegister = ({ name, email, password }) => {
    register({ name, email, password })
      .then(() => {
        handleLogin({ email, password })
      })
      .catch(err => console.log(err))
  };

  const handleLogin = ({ email, password }) => {
    login({ email, password })
      .then(res => {
        setCurrentUser({ name: res.name, email: res.email });
        setIsLoggedIn(true);
        navigate('/');
      })
      .catch(err => console.log(err))
  };

  const handleLogout = () => {
    logout()
      .then(() => {
        navigate('/');
        setCurrentUser({ name: '', email: '' });
        setIsLoggedIn(false);
      })
      .catch(err => console.log(err))
  };

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route exact path='/' element={
          <Main onLogout={handleLogout} cardImages={cardImages} />} 
        />
        <Route path='/profile' element={<Profile onLogout={handleLogout} />} />
        <Route path='/register' element={<Register onRegister={handleRegister} onLogout={handleLogout} />} />
        <Route path='/login' element={<Login onLogin={handleLogin} onLogout={handleLogout} />} />
        <Route path="/error-404" element={<NotFound />} />
        <Route path="*" element={ <Navigate to="/error-404" /> }/>
      </Routes>
      </CurrentUserContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
