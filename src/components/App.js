import React, {useState, useEffect} from "react";
import Doggo from "./Doggo"
import Dogbar from "./Dogbar"

function App() {

  const [dogList, setDogList] = useState([])
 

  const URL = "http://127.0.0.1:3001/pups"

  useEffect(()=> {
    fetch(URL)
  .then(res=> res.json())
  .then(data=> setDogList(data))
  },[])


  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
      <Dogbar dogList={dogList} />
      <Doggo />
    </div>
  );
}

export default App;
