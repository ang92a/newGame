import React from 'react';
import style from './style/GamePage.module.css';
import { useSelector } from 'react-redux';

const GamePage = (): JSX.Element => {
  const game = useSelector((store: RootState) => store.game);
  console.log(game, 22222);

  return (
    <div className={style.container}>
      <h1>GamePage</h1>
      <h3>score: </h3>
    </div>
  );
};

export default GamePage;
