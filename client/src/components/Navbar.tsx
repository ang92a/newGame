import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../redux/store';
import style from './style/Navbar.module.css';

const Navbar = (): JSX.Element => {
  const user = useSelector((store: RootState) => store.auth.auth);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = (): void => {
    fetch('/api/auth/logout')
      .then((res) => res.json())
      .then((data) => {
        if (data.message === 'success') {
          console.log(data);

          dispatch({ type: 'auth/logout' });
          navigate('/');
        }
      })
      .catch(console.log);
  };

  return (
    <div className={style.container}>
      <ul className={style.navbarList}>
        {user ? (
          <>
            <li>
              <NavLink className={style.navLink} to="/">
                Привет, {user.name}
              </NavLink>
            </li>
            <li onClick={handleLogout}>
              <button type="button" className={style.navLink}>
                Выход
              </button>
            </li>
          </>
        ) : (
          <>
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
          </>
        )}
      </ul>
      <Outlet />
    </div>
  );
};

export default Navbar;
