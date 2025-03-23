import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {Routes, Route} from "react-router-dom";
import HomePage from "./Pages/Home";
import Edit from "./Pages/Edit"

function App() {
  return (
    <div className="App">
      <h1>Meme Generator</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route  path="/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
