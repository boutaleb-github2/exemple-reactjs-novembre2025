import {useState} from 'react';

function ToggleMessage(){
const [message, setMessage]=useState("Salut")

return(
  <div>
    <h3 style={{color:"red"}}> Un Toggle Message : Salut / Au revoir  </h3>
    <button onClick={()=>setMessage(message === "Salut" ? "Au revoir":"Salut") }>{message}</button>
    
    
  </div>
)
}
export default ToggleMessage
