import Tab from "./Tab";

const NavMenu = () => {
  const handleClick = (e) => {
    const target = e.target.id;
    switch (target) {
      case "build-keyboard":
        console.log("clicked build keyboard");
        break;
      case "get-started":
        console.log("clicked get started");
        break;
      default:
        console.log("found bug(?)");
        break;
    }
  };

  return (
    <div className="flex place-items-center space-x-8">
      <Tab
        id="build-keyboard"
        text="Build Your Keyboard!"
        onClick={handleClick}
      />
      <Tab id="get-started" text="Get Started" onClick={handleClick} />
    </div>
  );
};

export default NavMenu;
