import React from "react";
import "./header.css";
import logo from "../../assets/redberry-logo.png";
import SignInButton from "../buttons/signinbutton/SignInButton";

const Header = () => {
  return (
    <div className="header__container">
      <img src={logo} />
      <SignInButton />
    </div>
  );
};

export default Header;
