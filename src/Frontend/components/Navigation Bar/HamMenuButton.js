import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const HamMenuButton = ({ onMenuToggle }) => {
  const [pressed, setPressed] = useState(false);

  // const handleClick = () => {
  //   const curr = !pressed;
  //   setPressed(curr);
  //   onMenuToggle(curr);
  // };

  return (
    <div>
      <MenuIcon />
    </div>
  );
};

export default HamMenuButton;
