import React from "react";
import DoggoList from "./DoggoList"

function App() {
  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
      <div id="dog-bar"></div>
      <DoggoList />
      
    </div>
  );
}

export default App;
