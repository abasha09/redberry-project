import React from "react";
import "./header.css";
import Logo from "../../assets/redberry-logo.png";
import SignInButton from "../buttons/signinbutton/SignInButton";

const Header = ({ openModal }) => {
  return (
    <div className="header__container">
      <img src={Logo} />
      <SignInButton openModal={openModal} />
    </div>
  );
};

export default Header;
