import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { getUserInfo, register, login} from '../utils/Api';
import { useState, useEffect } from 'react';
import './App.css';
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
  const [currentUser, setCurrentUser] = useState({ name: '', email: '' });
  const navigate = useNavigate();

  const handleRegister = ({ username, email, password }) => {
    register({ username, email, password })
      .then((res) => {
        handleLogin({ email, password })
      })
      .catch(err => console.log(err))
  };

  const handleLogin = ({ email, password }) => {
    login({ email, password })
      .then(res => {
        setCurrentUser({ name: res.name, email: res.email });
        localStorage.setItem('access_token', res.access_token);
        navigate('/');
      })
      .catch(err => console.log(err))
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    setCurrentUser({ name: '', email: '' });
  };

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (!token) return;
    getUserInfo(token)
      .then((res) => {
        console.log(res, 'res')
        setCurrentUser({ name: res.name, email: res.email });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route exact path='/' element={
          <Main onLogout={handleLogout} cardImages={cardImages} />} 
        />
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
