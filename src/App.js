import React,{useState} from 'react';
import './App.css';

function App() {
  const[count,setCount]=useState(0);
  
  return (
        <div>
        <h1>Co<span>unt</span>er</h1>
        <h3>{count}</h3>
        <button onClick={()=> setCount(count + 1)}>Increment</button>
        <button onClick={()=> setCount(count - 1)}>Decrement</button>
        </div>
    
  );
}

export default App;