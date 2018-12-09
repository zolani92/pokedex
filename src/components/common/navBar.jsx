import React from "react";

const NavBar = ({ text }) => {
  return (
    <nav
      className="navbar navbar-light bg-light"
      style={{
        justifyContent: "center"
      }}
    >
      <div>
        <span className="navbar-brand mb-0 h1">{text}</span>
      </div>
    </nav>
  );
};

export default NavBar;
