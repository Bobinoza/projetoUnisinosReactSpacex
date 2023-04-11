import { useContext } from 'react';
import { AuthContext } from '../contexts/auth';

// constante para acessar o contexto de autenticação, que eu criei no arquivo auth.jsx
const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
}

export default useAuth;