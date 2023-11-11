import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { register, login, logout } from '../utils/Api';
import { useState, useEffect } from 'react';
import './App.css';
import Profile from './profile/Profile';
import Main from './main/Main';
import NotFound from './notFound/NotFound';
import Register from './register/Register';
import Login from './login/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [currentUser, setCurrentUser] = useState({ name: '', email: '' });

  const generateCards = () => {
    const symbols = ['1', '2', '3', '4', '5', '6', '7', '8'];
    const shuffledSymbols = [...symbols, ...symbols].sort(() => Math.random() - 0.5);
    return shuffledSymbols.map((symbol, index) => ({ id: index, symbol, isFlipped: false, isMatched: false }));
  };

  const [cards, setCards] = useState(generateCards());
  const [flippedCount, setFlippedCount] = useState(0);
  const [flippedIndices, setFlippedIndices] = useState([]);

  useEffect(() => {
    if (flippedCount === 2) {
      const [index1, index2] = flippedIndices;
      const newCards = [...cards];

      if (newCards[index1].symbol === newCards[index2].symbol) {
        newCards[index1].isMatched = true;
        newCards[index2].isMatched = true;
      } else {
        newCards[index1].isFlipped = false;
        newCards[index2].isFlipped = false;
      }

      setCards(newCards);
      setFlippedCount(0);
      setFlippedIndices([]);
    }
  }, [flippedCount, flippedIndices, cards]);

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
        <Route exact path='/' element={<Main onLogout={handleLogout} cards={cards} />} />
        <Route path='/profile' element={<Profile onLogout={handleLogout} />} />
        <Route path='/register' element={<Register onRegister={handleRegister} onLogout={handleLogout} />} />
        <Route path='/login' element={<Login onLogin={handleLogin} onLogout={handleLogout} />} />
        <Route path="/error-404" element={<NotFound />} />
        <Route path="*" element={ <Navigate to="/error-404" /> }/>
      </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
