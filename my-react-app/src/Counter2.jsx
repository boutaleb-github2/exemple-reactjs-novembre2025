 import {useState} from "react";

 function Counter2() {
     const [count, setCount] = useState(1);
     return (
         <div>
             <p>Current Count: {count!==0 ? count:"valeur null"}</p>
                <button onClick={() => setCount(count + 1)}>Increase</button>
                <button onClick={() => setCount(count - 1)}>decrease</button>
          </div>
     );
 }

 export default Counter2;
