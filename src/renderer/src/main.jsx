import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// Hier wird euer CSS importiert (Der Name kann bei euch abweichen, z.B. index.css)
import './assets/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
