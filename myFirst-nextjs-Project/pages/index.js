// pages/index.js
import React from 'react';
import { UserProvider } from '../context/UserContext';
import AuthForm from '../components/AuthForm';
import Tree from '../components/Tree';

const Home = () => {
  return (
    <UserProvider>
      <div>
        <h1>Tree Structure App</h1>
        <AuthForm />
        <Tree />
      </div>
    </UserProvider>
  );
};

export default Home;
