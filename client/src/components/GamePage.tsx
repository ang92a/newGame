import React from 'react';
import style from './style/GamePage.module.css';
import { useSelector } from 'react-redux';

const GamePage = (): JSX.Element => {
  const game = useSelector((store: RootState) => store.game.game);
  // console.log(game, 22222);

  return (
    <div className={style.container}>
      <h1>GamePage</h1>
      <h3>score: </h3>
      {game.map((el) => (
        <div key={el.id} className={style.containerGame}>
          {el.title}
          {el.Questions.map((el) => (
            <>
              <div key={el.id} className={style.containerPrice}>
                {el.price}
              </div>
            </>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GamePage;
