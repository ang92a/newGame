import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import GamePage from './components/GamePage';
import WelcomePage from './components/WelcomePage';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import Navbar from './components/Navbar';
import { Theme } from './type';

import './App.css';
import { useAppDispatch } from './redux/store';
import { useSelector } from 'react-redux';

function App(): JSX.Element {
  const user = useSelector((store: RootState) => store.auth.auth);
  const theme = useSelector((store: RootState) => store.theme.theme);
  const dispatch = useAppDispatch();
  console.log(theme);

  // функция,которая проверяет юзера
  const checkUser = (): void => {
    fetch('/api/auth/check')
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: 'auth/sign-in', payload: data.user });
      })
      .catch(console.log);
  };

  // функция которая возвращяет все темы и все вопросы
  const getGame = (): void => {
    fetch('/api/game/')
      .then((res) => res.json())
      .then((data: Theme[]) => {
        // console.log(data, 1111);
        dispatch({ type: 'game/load', payload: data.game });
        dispatch({ type: 'theme/load', payload: data.theme });
      })
      .catch(console.log);
  };

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    getGame();
  }, [user]);

  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<WelcomePage />} />
        <Route path="/auth/sign-in" element={<SignInPage />} />
        <Route path="/auth/sign-up" element={<SignUpPage />} />
        <Route path="/game" element={<GamePage getGame={getGame} />} />
        <Route path="*" element={<h1>404</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
