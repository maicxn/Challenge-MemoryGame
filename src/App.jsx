import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Login} from "./components/Login";
import {MemoryGame} from "./components/MemoryGame";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/memoryGame" element={<MemoryGame />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
