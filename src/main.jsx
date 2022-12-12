import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './scss/main.scss'

console.log(import.meta.env.VITE_DEBUG)
// booleans from environmental variables are cast to strings
if (import.meta.env.VITE_DEBUG !== 'true') {
  console.log = console.warn = console.error = () => {};
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
