 import { useState } from "react";

function Counter2() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    // empêche les valeurs négatives
    setCount(prev => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div>
        <h3 style={{color:"red"}}> Un compteur croissant et decroissant </h3>
      <p>Current Count: {count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

export default Counter2;