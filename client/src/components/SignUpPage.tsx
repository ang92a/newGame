import React from 'react';
import style from './style/SignUpPage.module.css';

const SignUpPage = (): JSX.Element => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Регистрация</h1>
      <form action="#" className={style.formSingUp}>
        <input type="email" name="email" />
        <input type="text" name="password" />
        <button type="submit" className={style.btnSingUp}>
          Авторизация
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
