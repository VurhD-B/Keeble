import "./App.css";
import Navbar from "./components/Navigation Bar/Navbar";
// import Menu from "./components/Hamburger Menu/Menu";
import { useState } from "react";
import ProductGrid from "./components/Product Catalogue/ProductGrid";
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

      <div className="flex flex-1 items-center justify-evenly">
        <div className="ml-5 border-spacing-1 bg-carolina-blue w-[50%] mx-auto h-full overflow-x-auto rounded-md flex place-content-center">
          <ProductGrid />
        </div>

        <div className="ml-10 mr-5 pt-5 border-spacing-1 w-[50%] mx-auto h-full">
          <div className="bg-carolina-blue p-4 rounded-md inline-block">
            <AssemblyGrid />
          </div>
        </div>

      </div>

      {/* {showMenu && (
        <div className="flex-1 h-screen sticky top-0">
          <Menu className="transform translate-x-full transition-transform duration-500 ease-in-out" />
        </div>
      )} */}
    </div>
  );
}

export default App;
