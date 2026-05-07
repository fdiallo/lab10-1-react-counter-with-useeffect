import { useState } from 'react'
import './App.css'
import { ChevronUp, ChevronDown } from "lucide-react"
import { width } from '@fortawesome/free-solid-svg-icons/fa0'

function App() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  return (
    <div>
      <h5>Counter</h5>
      <h2>Counter Count: {count}</h2>

      <div>
        <button style={{ marginRight: "20px" }}>Decrement</button>
        <button style={{ marginRight: "20px" }}>Increment</button>
        <button style={{ height: "40px", backgroundColor: "red" }}>Reset</button>
      </div><br />

      <div style={{ display: "flex", flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ marginRight: '10px' }}>Step Value: </p>

        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", alignContent: "center", border: "1px solid white", padding: "10px" }}>
          <p style={{ marginRight: "10px", fontSize: "24px", fontWeight: "bold"}}> {step}</p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button style={{cursor: 'pointer'}}>
              <ChevronUp size={16} />
            </button>
            <button style={{cursor: 'pointer'}}>
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </div><br />

      <p>Changes saved</p><br />

      <p>Count History:</p>
      <hr style={{width: "300px"}} />

      <p>{count}</p>
      <span>--------------------------------</span>


      <br /><br /><br /><p>Use ArrowUp to increment and ArrowDown to decrement.</p>

    </div>
  )
}


export default App
