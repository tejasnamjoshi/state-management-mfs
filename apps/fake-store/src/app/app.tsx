import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Main, Header, Login } from '@ui';
import './app.scss';

const Cart = React.lazy(() => import('cart/Module'));

const Products = React.lazy(() => import('products/Module'));

export function App() {

  return (
    <React.Suspense fallback={null}>
      <div className="FakeStoreApp">
        <Header>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </Header>
        <Main>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Main>
      </div>
    </React.Suspense>
  );
}

export default App;
