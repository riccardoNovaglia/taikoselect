import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [selected, setSelected] = useState("no selection");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <select onChange={e => setSelected(e.target.value)}>
          <option disabled selected>
            no selection
          </option>
          <option value="option1">1</option>
          <option value="option2">2</option>
          <option value="option3">3</option>
          <option value="option4">4</option>
          <option value="option5">5</option>
        </select>
        <p>{selected}</p>
      </header>
    </div>
  );
}

export default App;
