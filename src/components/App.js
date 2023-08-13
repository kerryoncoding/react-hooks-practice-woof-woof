import React, {useState, useEffect} from "react";
import Doggo from "./Doggo"
import Dogbar from "./Dogbar"

function App() {

  const [dogList, setDogList] = useState([])
  const [selectedDog, setSelectedDog] = useState({})

 

  const URL = "http://127.0.0.1:3001/pups"

  useEffect(()=> {
    fetch(URL)
  .then(res=> res.json())
  .then(data=> setDogList(data))
  },[])

  function displayDog(id){
    let singleDog = dogList.filter((item)=>item.id == id )
    setSelectedDog(singleDog[0])
  }

  function updateDog(id){
    console.log(id)


    // fetch`${URL}/${id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type":"application/json"
    //   },
    //   body: JSON.stringify( isGoodDog= {!isGoodDog})
    // },
  
  }


  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
      <Dogbar dogList={dogList} displayDog={displayDog} />
      <Doggo selectedDog={selectedDog} updateDog={updateDog}/>
    </div>
  );
}

export default App;
