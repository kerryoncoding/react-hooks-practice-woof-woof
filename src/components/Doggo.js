import React from "react"

function Doggo({selectedDog}) {
   console.log(selectedDog)

   if (selectedDog == {}) {
      return (
         <div id="dog-summary-container">
            <h1>DOGGO:</h1>
         </div>
      )
   } else {
      return (
         <div id="dog-summary-container">
           <h1>DOGGO:</h1>
            <div id="dog-info">
               <img src={selectedDog.image} />
               <p>{selectedDog.name}</p>
               <button>Good Dog</button>
           </div>
         </div>
      )}
}


export default Doggo