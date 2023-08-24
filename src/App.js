import './App.css'
import React, {useState} from "react";
import FuncCompo from './Components/FuncCompo';
import ClassCompo from './Components/ClassCompo';

function App(){
  const [fState, setFState] = useState(false);
  const [cState, setCState] = useState(false);
  console.log(fState);

  return(
    <>
      <h1 id='funchead'>Styling using Functional and Class Components</h1>

      <button onClick={()=> setFState(!fState)} className="btn1">To see styling in Functional Component</button>
      <button onClick={()=> setCState(!cState)} className="btn2">To see styling in Class Component</button>
      {fState ? <FuncCompo/> : " "}
      {cState ? <ClassCompo/> : " "}
    </>
  )
}
export default App;