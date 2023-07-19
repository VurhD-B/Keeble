import "./App.css";
import Navbar from "./components/Navigation Bar/Navbar";
// import Menu from "./components/Hamburger Menu/Menu";
import { useState } from "react";
import ProductGrid from "./components/ProductGrid";
import AssemblyGrid from "./components/Assembly Area/AssemblyGrid";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="flex justify-center">
        <Navbar onMenuToggle={toggleMenu} />
      </div>

      <ProductGrid />
    </div>
  );
}

export default App;
