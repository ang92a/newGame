/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import { useState } from 'react';
import React from 'react';
import style from './style/SignUpPage.module.css';
import { useAppDispatch } from '../redux/store';
import { User } from '../type';
import { useNavigate } from 'react-router-dom';

const SignUpPage = (): JSX.Element => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = (e): void => {
    e.preventDefault();
    fetch('/api/auth/sign-up', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data: User) => {
        dispatch({ type: 'auth/sign-up', payload: data.user });
        navigate('/game');
      })
      .catch(console.log);
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>Регистрация</h1>
      <form action="#" className={style.formSingUp} onSubmit={onHandleSubmit}>
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className={style.btnSingUp}>
          Авторизация
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
