import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./landing/LandingPage";
import Home from "./Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
