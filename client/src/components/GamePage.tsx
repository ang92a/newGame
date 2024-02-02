import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import style from './style/GamePage.module.css';
import { Theme, User } from '../type';

function GamePage({ getGame }: { getGame: () => void }): JSX.Element {
  const game = useSelector((store: RootState) => store.game.game);
  const theme = useSelector((store: RootState) => store.theme.theme);
  const user = useSelector((store: RootState) => store.auth.auth);

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [id, setId] = useState();
  const [question, setQuestion] = useState('');
  const [score, setScore] = useState<User['score']>(0);

  useEffect(() => {
    if (user) {
      setScore(user.score);
    }
  }, [user]);

  useEffect(() => {
    getGame();
  }, [score]);

  const openModal = (): void => {
    //
    setModalIsOpen(true);
  };
  const closeModal = (): void => {
    setModalIsOpen(false);
  };

  const onHandleSendAnswers = () => {
    fetch('/api/game/', {
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
          <p className="question-text">Вопрос:{question.question}</p>
          <p className="question-text">Цена:{question.price}</p>
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
              setUserAnswer('');
            }}
          >
            Ответить
          </button>
        </div>
      </Modal>
      <h1>GamePage</h1>
      <h3>score:{score} </h3>
      {theme?.map((el) => (
        <div key={el.id} className={style.containerGame}>
          <p className={style.themeTitle}>{el.title}</p>
          {el.Questions?.map((question) => (
            <div
              onClick={() => {
                openModal();
                setQuestion(question);
                setId(question.id);
              }}
              key={question.id}
              className={
                game?.some((el) => el.question_id === question.id)
                  ? style.containerCheck
                  : style.containerNoCheck
              }
            >
              {question.price}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default GamePage;
