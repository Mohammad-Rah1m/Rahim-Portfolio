import React , { useState } from 'react'

export default function Counter(props) {
    const [count, setCount] = useState(0);

  // Event handler function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // Event handler function to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className='container my-3' style={{color:props.mode==='light'?'black':'white'}}>
      <h2>Counter Example</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}
