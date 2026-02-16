import logo from "./logo.svg";
import "./App.css";
import "./global.css";
import LandingPage from "./components/Landing";
import { Routes, Route, Link } from "react-router-dom";
import AddProduct from "./components/ProductI";

function App() {
  return (
    <div className="app-container">
      <header>
        <div className="inner-header-class">
          <h1>
            DOLLYS <span>HARD</span>WARE
          </h1>

          <nav>
            <Link to="/add-product" id="btn-style" className="btn btn-primary">
              Add Product
            </Link>
            <Link to="/" id="btn-style" className="btn btn-primary">
              Home
            </Link>
          </nav>
        </div>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
