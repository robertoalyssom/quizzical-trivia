import React, { useEffect } from "react";
import "../styles/modal.css";

const Modal = ({ isModalOpen, closeModal }) => {
  useEffect(() => {
    if (isModalOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isModalOpen]);

  return (
    <>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <p className="modal-text">Answer all quizzes!</p>
            <button className="btn" onClick={closeModal}>
              Ok
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
