import "./App.css";
import Navbar from "./components/Navigation Bar/Navbar.js";
import Welcome from "./components/Welcome Page/Welcome";

function App() {
  return (
    <div className="background">
      <Navbar />
      <Welcome />
    </div>
  );
}
export default App;
