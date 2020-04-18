import React from 'react';

import './style.css';

function ModalForm(props) {
  const closeHandler = () => {
    props.onClose();
  }

  return (
    <div className="modal-container">
      <div className="modal-container__wrapper">

        <div
          className="wrapper__close-button"
          onClick={closeHandler}
        ></div>

        <div className="wrapper__content">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default ModalForm;