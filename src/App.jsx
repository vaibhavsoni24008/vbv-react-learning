import React from 'react'
// import List from "./List";
import {useEffect, useState} from 'react'

//UseEffect

function App() {
  const [count, setCount] = useState(0);
  const [isFlag, setIsFlag] = useState(false);
  useEffect(()=> {
    console.log("hi");
  });

  return (
    <div>
      <h1>Today we are learning UseEffect</h1>
      <h1>{isFlag && "Squad 169 and 168"}</h1>
      <button onClick={()=> setCount(count + 1)}>+</button>
      <button onClick={()=> setIsFlag(!isFlag)}>Toggle</button>

    </div>
  )
}

export default App
