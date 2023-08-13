import React from "react"

function DogItem({item, displayDog}){

     return (
      <div className="dogContainer" onClick={()=>displayDog(item.id)}>
         <p>{item.name}</p>
      </div>
      
   )

}

export default DogItem