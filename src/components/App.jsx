import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Profile from './profile/Profile';
import Main from './main/Main';
import NotFound from './notFound/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Main/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path="/error-404" element={<NotFound />} />
        <Route path="*" element={ <Navigate to="/error-404" /> }/>
      </Routes>
    </div>
  );
}

export default App;
