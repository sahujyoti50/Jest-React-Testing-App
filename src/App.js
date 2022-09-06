
import { useState } from 'react';
import './App.css';

function App() {
  const [input,setInput]=useState("test");
  const [display,setDisplay]=useState(false);
  return (
    <div className="App">
      <div><p>Event Manager App</p></div>
      <div>
        <input type="text" onChange={(e)=>{setInput(e.target.value)}} value={input}/>
        <button onClick={()=>{setDisplay(!display)}}>{display?"Hide":"Display"}</button>
        {/* <button onClick={()=>setInput("")}>Reset</button> */}
        {display&&<p>{input}</p>}
      </div>
    </div>
  );
}

export default App;
