import React, { useState } from 'react';
import Modal from 'react-modal';
import type { Question } from '../type';

function ModalQuestion({ question }: { question: Question }): JSX.Element {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [userAnswer, setUserAnswer] = useState('');
  const openModal = (): void => {
    setModalIsOpen(true);
  };
  const closeModal = (): void => {
    setModalIsOpen(false);
  };
  const modalContent = (
    <div className="question-card">
      <h4 className="question-title">Тема:</h4>
      <p className="question-text">текст вопроса:</p>
      <input
        value={userAnswer}
        placeholder="ваш ответ"
        type="text"
        onChange={(e) => setUserAnswer(e.target.value)}
      />
    </div>
  );
  return (
    <div>
      <button type="button" onClick={openModal}>
        Открыть модальное окно
      </button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        {modalContent}
      </Modal>
    </div>
  );
}

export default ModalQuestion;
