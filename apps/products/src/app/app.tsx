import { cartAtom, productsAtom, tokenAtom } from '@store';
import { Card } from '@ui';
import axios from 'axios';
import { useAtom, useAtomValue } from 'jotai';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import './app.scss';

export function App() {
  const token = useAtomValue(tokenAtom);
  const cart = useAtomValue(cartAtom);
  const [products, setProducts] = useAtom(productsAtom);
  // const { token }= useAppShell();

  useEffect(() => {
    if (!token) return;

    if (products.length) return;

    (async () => {
      const res = await axios.get('https://api.escuelajs.co/api/v1/products');
      setProducts(res.data);
    })();
  }, [setProducts, token, products]);

  if (!token) return <Navigate to="/" />;

  return (
    <div className="Products">
      <h2>Available Products - {cart.length}</h2>
      <ul className="Products__list">
        {products.map((product) => (
          <li key={product.id}>
            <Card {...product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
