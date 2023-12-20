import React from "react";
import "./signinbutton.css";

const SignInButton = ({ openModal }) => {
  return (
    <button onClick={openModal} className="signin-btn">
      შესვლა
    </button>
  );
};

export default SignInButton;
