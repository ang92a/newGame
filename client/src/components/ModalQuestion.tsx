import React from 'react';
import Modal from 'react-modal';
import type { Question } from '../type';

function ModalQuestion({ question }: { question: Question }): JSX.Element {
  const [modalIsOpen, setModalIsOpen] = useState(false);
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
      <p>цена вопроса</p>
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
