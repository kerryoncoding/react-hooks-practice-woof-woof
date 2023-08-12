import React from "react"

function DogItem({item}){
   return (
      <div className="dogContainer">
         <p>{item.name}</p>
      </div>
      
   )

}

export default DogItem