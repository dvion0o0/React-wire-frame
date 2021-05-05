import React from "react";
import Logo from "./logo.svg";
import { useGlobalContext } from "../context";

function Header() {
  const { time } = useGlobalContext();

  return (
    <header className="header">
      <div className="logo-container">
        <img src={Logo} alt="Logo" style={{ width: "50px", height: "50px" }} />
      </div>
      <div className="header-content">
        <h2>Current time is: {time}</h2>
      </div>
    </header>
  );
}

export default Header;
