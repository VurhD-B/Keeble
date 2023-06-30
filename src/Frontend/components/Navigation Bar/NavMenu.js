import Tab from "./Tab.js";

const NavMenu = ({ onTabClick }) => {
  const navmenuStyle = {
    display: "flex",
    margin: "0 auto",
    alignItems: "center",
    justifyContent: "center",
  };

  const handleClick = (event) => {
    const target = event.target.id;

    switch (target) {
      case "aboutUs":
        console.log("clicked about us!");
        break;
      case "buildKeyboard":
        console.log("clicked build keyboard");
        break;
      case "help":
        console.log("clicked for help!");
        break;
      default:
        console.log("found a bug!");
        break;
    }
  };

  return (
    <div className="navmenu" style={navmenuStyle}>
      <Tab id="aboutUs" text={"About Us"} onClick={handleClick} />
      <Tab
        id="buildKeyboard"
        text={"Build Your Keyboard"}
        onClick={handleClick}
      />
      <Tab id="help" text={"I Need Help!"} onClick={handleClick} />
    </div>
  );
};

export default NavMenu;
