import React from "react";
import "./Header.css";
import LoginButton from './LoginButton' ;
import LogoutButton from './LogoutButton';

const Header = () => {
  return (
    <>
      <span className="header">⭐ Movie Stars ⭐</span>
      <span >
        <LogoutButton/>
        <LoginButton />
      </span>
    </>
  );
};

export default Header;
