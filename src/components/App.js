import React from "react";
import Doggo from "./Doggo"
import Dogbar from "./Dogbar"

function App() {
  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
      <Dogbar />
      <Doggo />
    </div>
  );
}

export default App;
