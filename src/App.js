import "./App.css";
import Navbar from "./components/Navigation Bar/Navbar.js";
// import Welcome from "./components/Welcome Page/Welcome";
import ItemGrid from "./components/Product Grid/ItemGrid";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="products">
        <ItemGrid />
      </div>
    </div>
  );
}
export default App;
