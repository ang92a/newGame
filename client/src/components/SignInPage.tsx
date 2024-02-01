import React from 'react';
import style from './style/SignInPage.module.css';

const SignInPage = (): JSX.Element => {
  return (
    <div className={style.container}>
      <h1>Вход</h1>
      <form action="#" className={style.formSingIn}>
        <input type="text" name="name" />
        <input type="text" name="password" />
        <button className={style.btnSingIn}>Вход</button>
      </form>
    </div>
  );
};

export default SignInPage;
