import style from './style/GamePage.module.css';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import Modal from 'react-modal';
import type { Question } from '../type';

function GamePage({ question }: { question: Question }): JSX.Element {
  const game = useSelector((store: RootState) => store.game.game);
  console.log(game, 123123);

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [id, setId] = useState();
  const [score, setScore] = useState(0);

  const openModal = (): void => {
    setModalIsOpen(true);
  };
  const closeModal = (): void => {
    setModalIsOpen(false);
  };
  const onHandleSendAnswers = (): void => {
    const result = fetch('/api/game/', {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        userAnswer,
        id,
        score,
      }),
    }).then((res) => res.json().then((data) => setScore(data.finishScore)));
  };

  return (
    <div className={style.container}>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <div className={style.question_card}>
          <h4 className="question-title">Тема:</h4>
          <p className="question-text">
            {question.question}.Цена:{question.price}
          </p>
          <input
            className={style.input_card}
            value={userAnswer}
            placeholder="ваш ответ"
            type="text"
            onChange={(e) => setUserAnswer(e.target.value)}
          />
          <button
            className={style.btn_card}
            type="button"
            onClick={() => {
              closeModal();
              onHandleSendAnswers();
            }}
          >
            Ответить
          </button>
        </div>
      </Modal>
      <h1>GamePage</h1>
      <h3>score:{score} </h3>
      {game.map((el) => (
        <div key={el.id} className={style.containerGame}>
          {el.title}
          {el.Questions.map((el) => (
            <div
              onClick={() => {
                openModal();
                setId(el.id);
              }}
              key={el.id}
              className={style.containerPrice}
            >
              {el.price}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default GamePage;
