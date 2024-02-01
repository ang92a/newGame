import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import GamePage from './components/GamePage';
import WelcomePage from './components/WelcomePage';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import Navbar from './components/Navbar';

import './App.css';

function App(): JSX.Element {
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
