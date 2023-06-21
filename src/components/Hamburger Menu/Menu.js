import { useEffect, useState } from "react";

const Menu = ({ menuVisible }) => {
  const [visible, setVisibility] = useState("false");

  const hamburgerMenuStyle = {
    display: "flex",

    position: "absolute",
    top: "20%",
    right: 0,
    width: "25%",
    height: "70%",

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
      className={`hamburgermenu ${visible ? "show" : "hidden"}`}
      style={hamburgerMenuStyle}
    >
      Peekaboo!
    </div>
  );
};

export default Menu;
