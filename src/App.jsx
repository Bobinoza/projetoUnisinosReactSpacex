import { Routes, Route } from 'react-router-dom';

import MenuLateral from './components/MenuLateral';
import Home from './pages/Home';
import Crew from './pages/Crew';
import SingleCrew from './pages/SingleCrew';
import Login from './pages/Login';

import './App.css';

const App = () => {
  return (
    <div className='wrapperApp'>
      <MenuLateral />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/crew' element={<Crew />} />
        <Route path='/crew/:id' element={<SingleCrew />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
