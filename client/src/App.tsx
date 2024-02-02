import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import GamePage from './components/GamePage';
import WelcomePage from './components/WelcomePage';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import Navbar from './components/Navbar';

import './App.css';
import { useAppDispatch } from './redux/store';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  // функция,которая проверяет юзера
  const checkUser = (): void => {
    fetch('/api/auth/check')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'auth/sign-in', payload: data.user }))
      .catch(console.log);
  };

  // функция которая возвращяет все темы
  const getGame = (): void => {
    fetch('/api/game/')
      .then((res) => res.json())
      .then((data) => {
        console.log(data.game);
        dispatch({ type: 'game/load', payload: data.game });
      })
      .catch(console.log);
  };

  useEffect(() => {
    checkUser();
    getGame();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<WelcomePage />} />
        <Route path="/auth/sign-in" element={<SignInPage />} />
        <Route path="/auth/sign-up" element={<SignUpPage />} />
        <Route path="/game" element={<GamePage />} />
      </Route>
    </Routes>
  );
}

export default App;
