import { useEffect, useState } from "react"
import { ChevronUp, ChevronDown } from "lucide-react"

function AdvancedCounter() {
    


  const [count, setCount] = useState<number>(0)

  useEffect(() => {

  })

  const [step, setStep] = useState(1)

  const decrement = () => setCount(prev => prev - step)
  const increment = () => setCount(prev => prev + step)

  const chevronUp = () => setStep(prev => prev + 1)
  const chevronDown = () => setStep(prev => prev - 1)
  const reset = () => {
    setCount(0)
    setStep(1)
  }

  const handleKeyDown = (event: { key: string; preventDefault: () => void }) => {
    if (event.key === "ArrowUp") {
      event.preventDefault()
      setCount(prev => prev + step)
    } else if (event.key === "ArrowDown") {
      event.preventDefault()
      setCount(prev => prev - step)
    }
  }

  return (
    <div style={{border: "1px solid white", marginLeft: "300px", marginRight: "300px"}}>
      <h1>Counter</h1>
      {/* <h2>Counter Count: {count}</h2> */}

      <div style={ { display: "flex", flexDirection: "row", padding: '20px', justifyContent: "center", alignItems: "center" }}>
        <h3 style={{paddingRight: "20px"}}>Value: </h3>
        <input 
          type="text"
          value={count}
          onKeyDown={handleKeyDown}
          readOnly
          placeholder="Use Up/Down Arrows"
          style={{ textAlign: 'center', fontSize: '1.2rem' , height: "30px", width: "100px"}}
        />
      </div>

      <div>
        <button
          style={{ marginRight: "20px" }}
          onClick={decrement}
          onKeyDown={handleKeyDown}
        >Decrement</button>
        <button style={{ marginRight: "20px" }} onClick={increment}>Increment</button>
        <button style={{ height: "40px", backgroundColor: "red" }} onClick={reset}>Reset</button>
      </div><br />

      <div style={{ display: "flex", flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ marginRight: '10px' }}>Step Value: </p>

        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", alignContent: "center", border: "1px solid white", padding: "10px" }}>
          <p style={{ marginRight: "10px", fontSize: "24px", fontWeight: "bold" }}> {step}</p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button style={{ cursor: 'pointer' }} onClick={chevronUp}>
              <ChevronUp size={16} />
            </button>
            <button style={{ cursor: 'pointer' }} onClick={chevronDown}>
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </div><br />

      <p>Changes saved</p><br />

      <p>Count History:</p>
      <hr style={{ width: "300px" }} />

      <div id='history'>
        <p>{count}</p>
        <span>--------------------------------</span>
      </div>


      <br /><p><small>Use ArrowUp to increment and ArrowDown to decrement.</small></p>

    </div>
  )


}

export default AdvancedCounter