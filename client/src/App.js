// import logo from './logo.svg';
import './App.css';
import Counter from "./components/counter.js";
import { useState, useEffect } from 'react';

function App() {

  let [checkboxValue, setCheckboxValue] = useState(false)
 


  useEffect(() => {
    console.log("first render, incrementing site visits by 1");
  }, [])
  console.log("rendering app");

  let handleChange = (e) => {
    setCheckboxValue(!checkboxValue)
  }
   // count our site visits

  return (
    <div className="App">
     <Counter />

     <input type="checkbox"value={checkboxValue} onChange={(event) => handleChange(event)}/>
     </div>
  )
}

export default App;
