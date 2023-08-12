import React from "react";
import Doggo from "./Doggo"

function App() {
  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
      <div id="dog-bar"></div>
      <Doggo />
    </div>
  );
}

export default App;
