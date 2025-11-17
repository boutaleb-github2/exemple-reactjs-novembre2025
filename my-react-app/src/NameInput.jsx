import {useState} from "react";

function NameInput (){
  const [inputValue,setInputValue]=useState("");
  return (
    <div>
      <h3 style={{color:"red"}}> Affichage du contenu de l'input  </h3>
      <p>Your text apear here : {inputValue}</p>
      <label> Enter your Text
      
      </label>
      <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
    </div>
  )

}
export default NameInput