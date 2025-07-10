import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'



// createRoot -> makes it virtual dom
createRoot(document.getElementById('root')).render(
  <App/>
 
)

