import React, {useState} from "react"

function Doggo({selectedDog, updateDog}) {

   // const [isGoodDog, setIsGoodDog] = useState("")
   console.log("this", selectedDog.id)
   console.log(selectedDog.isGoodDog)


   function flipDog() {
      console.log("flipped")
      updateDog(selectedDog.id)
   }

   if (selectedDog.id == null) {
      return (
         <div id="dog-summary-container">
            <h1>DOGGO:</h1>
         </div>
      )
   } else {
      if (selectedDog.isGoodDog) {
         return (
            <div id="dog-summary-container">
              <h1>DOGGO:</h1>
               <div id="dog-info">
                  <img src={selectedDog.image} />
                  <p>{selectedDog.name}</p>
                  <button onClick={flipDog}>Good Dog</button>
              </div>
            </div>
         )
      } else {
         return (
            <div id="dog-summary-container">
              <h1>DOGGO:</h1>
               <div id="dog-info">
                  <img src={selectedDog.image} />
                  <p>{selectedDog.name}</p>
                  <button onClick={flipDog}>Bad Dog</button>
              </div>
            </div>
            )}
         }
         
}


export default Doggo