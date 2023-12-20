import React from "react";
import "./modal.css";
import close from "../../assets/close.svg";
import Input from "../inputs/Input";
import VerifyButton from "../buttons/verifybutton/VerifyButton";

const Modal = ({ closeModal }) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <img src={close} onClick={closeModal} className="close" />
        <div className="modal-title">შესვლა</div>
        <div className="modal-content">
          <p>ელ-ფოსტა</p>
          <Input />
          <VerifyButton>შესვლა</VerifyButton>
        </div>
      </div>
    </div>
  );
};

export default Modal;
