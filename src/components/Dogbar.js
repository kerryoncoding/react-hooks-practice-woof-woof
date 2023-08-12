import React from "react"
import DogItem from "./DogItem"

function Dogbar({dogList}){

   console.log(dogList)

   let dog = dogList.map((item)=> {
      return(
         <DogItem
         key={item.id}
         item={item} />
      )
   } )


   return(
      <div id="dog-bar">{dog}</div>

   )
}

export default Dogbar