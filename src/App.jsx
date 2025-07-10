import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './components/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Cafe Frontend</h1>
      <Register/>
      <h3>This is footer</h3>
    </>
  )
}

export default App
