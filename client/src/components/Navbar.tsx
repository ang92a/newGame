import { NavLink, Outlet } from 'react-router-dom';
import React from 'react';
import style from './style/Navbar.module.css';

const Navbar = (): JSX.Element => {
  return (
    <div className={style.container}>
      <ul className={style.navbarList}>
        <li>
          <NavLink className={style.navLink} to="/">
            Привет,
          </NavLink>
        </li>
        <li>
          <NavLink className={style.navLink} to="/auth/sign-in">
            Вход
          </NavLink>
        </li>
        <li>
          <NavLink className={style.navLink} to="/auth/sign-up">
            Регистрация
          </NavLink>
        </li>
        <li>
          <NavLink className={style.navLink} to="/logout">
            Выход
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Navbar;
