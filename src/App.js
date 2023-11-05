import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./Navbar";
import Card from "./Card";
import Home from "./Home";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          navBarName="My React App"
          item1Name="Home"
          item2Name="Cards"
          item3Name="Contact"
          item1Path="/"
          item2Path="/card"
          item3Path="/contact"
        />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/card" element={<Card />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
