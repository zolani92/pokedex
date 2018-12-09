import React from "react";

const NavBar = ({ text }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">{text}</span>
    </nav>
  );
};

export default NavBar;
