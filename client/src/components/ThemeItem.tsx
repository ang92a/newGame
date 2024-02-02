import React, { useEffect } from 'react';
import style from './style/ThemeItem.module.css';

const ThemeItem = (): JSX.Element => {
  return (
    <div className={style.container__row}>
      <div></div>
      <QuestionItem />
    </div>
  );
};

export default ThemeItem;
