import { Link } from 'react-router-dom';
import './menuLateral.css';
import logoHome from '../assets/SpaceX-0.svg';



const MenuLateral = () => {
  return (
    <nav>
      <div>
        <Link to="/" className='navLinkTop'>
          <img src={logoHome} />
        </Link>

        <ul>
          <li>
            <Link to="/" className='navLink'>Home</Link>
          </li>
          <li>
            <Link to="/crew" className='navLink'>Crew</Link>
          </li>
          <li>
            <Link to="/resumo" className='navLink'>Launch History</Link>
          </li>
          <li>
            <Link to="/" className='navLink'>Recovery</Link>
          </li>
          <li>
            <Link to="/login" className='navLink'>ADMIN</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MenuLateral;