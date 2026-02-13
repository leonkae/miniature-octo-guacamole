import logo from "./logo.svg";
import "./App.css";
import "./global.css";
import LandingPage from "./components/Landing";
import {Routes, Route, Link } from "react-router-dom";
import AddProduct from "./components/ProductI";


function App() {
  return (
    <div className="app-container">
      <header>
        <h1>
          DOLLYS <span>HARD</span>WARE
        </h1>

        <nav>
          <Link to="/add-product" className="btn btn-primary">Add Product</Link>
        </nav>

        <Routes>
          <Route path="/add-product" element={<AddProduct />} /> 
        </Routes>

      </header>
      <LandingPage />
    </div>
  );
}

export default App;
