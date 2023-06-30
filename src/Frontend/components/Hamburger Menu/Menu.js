import { useEffect, useState } from "react";

const Menu = ({ menuVisible }) => {

  const hamburgerMenuStyle = {
    display: "flex",

    position: "absolute",
    top: "20%",
    right: 0,
    width: "25%",
    height: "100vh",

    backgroundColor: "#904c77",
    borderRadius: "10px 0 0 10px",
    boxShadow: "0 0 10px rgba(0,0,0,100)",

    paddingTop: "0.5em",
    paddingLeft: "0.75em",

    opacity: menuVisible ? 1 : 0,
    transition: "opacity 0.1s ease-in",
  };

  return (
    <div
      className={`hamburgermenu ${menuVisible ? "show" : "hidden"}`}
      style={hamburgerMenuStyle}
    >
      hamburger menu goes here if needed
    </div>
  );
};

export default Menu;
