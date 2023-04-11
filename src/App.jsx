import { Routes, Route } from 'react-router-dom';

import MenuLateral from './components/MenuLateral';
import Home from './pages/Home';
import Crew from './pages/Crew';
import SingleCrew from './pages/SingleCrew';
import Signin from './pages/Signin'
import Signup from './pages/Signup';
import Mission from './pages/Mission';

import useAuth from './hooks/useAuth';
import { AuthProvider } from './contexts/auth'; // agora toda a aplicação tem acesso a esses valores.

import './App.css';

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed == true ? <Item /> : <Signin />;
};

const App = () => {
  return (
    <div className='wrapperApp'>
      <AuthProvider>
        <MenuLateral />
        <Routes className='Routes'>
          <Route path='/home' element={<Private Item={Home} />} />
          <Route path='/crew' element={<Private Item={Crew} />} />
          <Route path='/crew/:id' element={<Private Item={SingleCrew} />} />
          <Route path='/mission' element={<Private Item={Mission} />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<Signin />} />
          <Route path='*' element={<Signin />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
