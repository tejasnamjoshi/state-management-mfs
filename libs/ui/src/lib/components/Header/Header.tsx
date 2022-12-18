import { cartAtom, productsAtom, tokenAtom } from '@store';
import { useAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import './Header.scss';

export const Header = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useAtom(tokenAtom);
  const resetProducts = useResetAtom(productsAtom);
  const resetCart = useResetAtom(cartAtom);
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken('')
    resetProducts();
    resetCart();
    navigate('/');
  }

  return (
    <header className="Header">
      <ul className="Header__ul">
        {children}
        {token && (
          <li>
            <Button onClick={handleLogout}>Logout</Button>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
