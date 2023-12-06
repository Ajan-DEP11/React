
import './App.css'
import {useState} from "react";

function App() {

    const [value,setValue] =useState("");
    const [checked,setChecked] = useState(true);


  return (
    <>
        <h1>React Forms</h1>
        <label><input type="checkbox" checked={checked} onChange={e=>setChecked(e.target.checked)}/>Enable</label><br/>
        <input type="text" value={value} disabled={!checked} onChange={e =>setValue(e.target.value)}/>
        <h3>Out Put</h3>
        <div>{value}</div>
    </>
  )
}

export default App
