import { useState } from 'react'
import './App.css'
import Editor from './components/Editor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Editor />
      </div>
    </>
  )
}

export default App
