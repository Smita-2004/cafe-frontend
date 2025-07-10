import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Home from './components/Home'
import Temp from './components/Temp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home name="Smita" age={21}/> */}
      {/* <Temp flag={true}/> */}
      <Temp />
    </>
  )
}

export default App
