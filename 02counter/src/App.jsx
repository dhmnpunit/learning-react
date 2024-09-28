import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)

  const addValue = () => {
    
    if(counter < 20) {
      setCounter(counter + 1)
    } else {
      alert("counter can't go more than 20");
    }
  }

  const removeValue = () => {
    if(counter > 0) {
      setCounter(counter - 1)
    } else {
      alert("counter can't go less than 0");
    }
  }

  return (
    <>
      <h1>Punit aur react</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br /> <br />
      <button onClick={removeValue}>Remove value</button>
      <footer>footer: {counter}</footer>
    </>
  )
}

export default App
