// components/AuthForm.js
import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

const AuthForm = () => {
  const [username, setUsername] = useState('');
  const { login } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default AuthForm;
