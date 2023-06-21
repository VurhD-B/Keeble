import { GiAbstract012 } from "react-icons/gi";
import { AiOutlineMenu } from "react-icons/ai";
import NavMenu from "./NavMenu";
import Menu from "../Hamburger Menu/Menu";
import { useState } from "react";

const Navbar = ({ onClick }) => {
  const navbarStyle = {
    display: "flex",
    alignItems: "center",
    background: "#a6b1e1",
    padding: "1.5em",
    width: "100%",
  };

  const iconStyle = {
    size: "1.5em",
    color: "purple",
    cursor: "pointer",
  };

  const menuStyle = {
    size: "1.5em",
    color: "purple",
    cursor: "pointer",
    justifyContent: "space-between",
  };

  const handleClick = (event) => {
    const target = event.target.id;

    switch (target) {
      case "icon":
        console.log("clicked on the icon!");
        break;
      case "navmenu":
        console.log("clicked on the navigation menu!");
        break;
      case "burgermenu":
        console.log("clicked on the hamburger menu!");
        break;
      default:
        console.log("found a bug!");
        break;
    }
  };

  const [showHamburgerMenu, setShowHamburgerMenu] = useState("false");

  const handleHamburgerMenuClick = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
  };

  return (
    <>
      <nav className="navbar" style={navbarStyle}>
        <GiAbstract012 id="icon" style={iconStyle} onClick={handleClick} />
        <span style={{ margin: "0 auto" }}>
          <NavMenu id="navmenu" onTabClick={handleClick} />
        </span>
        <AiOutlineMenu
          id="burgermenu"
          style={menuStyle}
          onClick={handleHamburgerMenuClick}
        />
      </nav>
      <Menu menuVisible={showHamburgerMenu} />
    </>
  );
};

export default Navbar;
