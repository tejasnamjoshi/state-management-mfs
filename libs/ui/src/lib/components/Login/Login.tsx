import { FormEventHandler, useState } from 'react';
import './Login.scss';
import axios from 'axios';
import { useAtom } from 'jotai';
import { Navigate, useNavigate } from 'react-router-dom';
import { tokenAtom } from '@store';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useAtom(tokenAtom);
  // const { token, setToken } = useAppShell();
  const navigate = useNavigate();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    (async () => {
      try {
        const res = await axios.post('https://api.escuelajs.co/api/v1/auth/login', {
          email: username,
          password,
        });
        setToken(res.data.access_token);
        navigate('/products');
      } catch (error) {
        console.log(error);
      }
    })();
  };

  if (token) return <Navigate to='/products' />

  return (
    <form className="Login" onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
