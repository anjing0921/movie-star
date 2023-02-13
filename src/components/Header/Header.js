import React from "react";
import "./Header.css";
import LoginButton from "../../Pages/Login/LoginButton";
//import LogoutButton from "../../Pages/Login/LogoutButton";

const Header = () => {
  return (
    <>
      <span className="header">🎬 Entertainment Hub 🎥</span>
      <div>
        <LoginButton />
      </div>
    </>
  );
};

export default Header;
