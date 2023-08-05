import NavMenu from "./NavMenu";
import Icon from "./Icon";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ onMenuToggle }) => {
  return (
    <div className="bg-pale-lilac text-mulled-wine w-full sticky top-0 z-10 h-[64px] flex justify-between items-center">
      <div className="flex justify-between items-center">
        <Icon />
      </div>
      <span className="flex flex-grow justify-center">
        <NavMenu />
      </span>
      <MenuIcon className="cursor-pointer mr-5" onClick={onMenuToggle} />
    </div>
  );
};

export default Navbar;
