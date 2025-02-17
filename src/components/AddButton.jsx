import { useEffect, memo } from "react";

const AddButton = ({handleClick}) => {
   useEffect(()=>{
    console.log("Called in button")
   },[handleClick])
  return (
    <button onClick={handleClick}>Add</button>
  )
}

export default memo(AddButton);