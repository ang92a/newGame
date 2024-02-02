import React, { useState } from 'react';
import style from './style/SignInPage.module.css';
import { useAppDispatch } from '../redux/store';
import { useNavigate } from 'react-router-dom';

const SignInPage = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useAppDispatch();
  const nav = useNavigate();

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = (e): void => {
    e.preventDefault();
    fetch('/api/auth/sign-in', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data: User) => {
        dispatch({ type: 'auth/sign-in', payload: data.user });
        nav('/game');
      })
      .catch(console.log);
  };
  return (
    <div className={style.container}>
      <h1>Вход</h1>
      <form action="#" className={style.formSingIn} onSubmit={onHandleSubmit}>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          type="text"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button className={style.btnSingIn}>Вход</button>
      </form>
    </div>
  );
};

export default SignInPage;
