import { cartAtom, tokenAtom } from '@store';
import { Card } from '@ui';
import { useAtomValue } from 'jotai';
import { Navigate } from 'react-router-dom';
import './app.scss';

export function App() {
  const token = useAtomValue(tokenAtom);
  const cart = useAtomValue(cartAtom);

  if (!token) return <Navigate to="/" />;

  if (!cart.length) return <div>No products added to cart</div>

  return (
    <div className="Cart">
      <ul className="Cart__list">
        {cart.map((product) => (
          <li key={product.id}>
            <Card {...product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
