import { Link } from 'react-router-dom';
import './menuLateral.css';
import logoHome from '../assets/SpaceX-0.svg';

import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';


const MenuLateral = () => {
  //
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav>
      <div>
        <Link to="/" className='navLinkTop'>
          <img src={logoHome} />
        </Link>

        <ul>
          <li>
            <Link to="/home" className='navLink'>Home</Link>
          </li>
          <li>
            <Link to="/crew" className='navLink'>Crew</Link>
          </li>
          <li>
            <Link to="/mission" className='navLink'>Mission</Link>
          </li>
        </ul>

        <div className='btn-menuLateral'>
          <button onClick={() => [signout(), navigate('/')]}>Encerrar sessão</button>
        </div>
      </div>
    </nav>
  );
};

export default MenuLateral;