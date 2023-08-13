import React, {useState} from "react"

function Doggo({selectedDog}) {

   const [isGoodDog, setIsGoodDog] = useState("")
   console.log("this", selectedDog.id)
   console.log(selectedDog.isGoodDog)

   if(selectedDog.isGoodDog == false) {
      // setIsGoodDog("Bad")
   }

   function flipDog() {
      console.log("flipped")
   }

   if (selectedDog.id == null) {
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
               {/* <button onClick={flipDog}>{selectedDog.isGoodDog} ? Good Dog : Bad Dog</button> */}
           </div>
         </div>
      )}
}


export default Doggo