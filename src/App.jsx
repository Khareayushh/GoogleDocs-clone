import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{color: 'blue'}}>
        <h1>Google Docs</h1>
      </div>
    </>
  )
}

export default App
