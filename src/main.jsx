import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// iside the div that exists in index.html <div id="root" > do render te app.jsx
// so the code that u write in app.jsx will render in index.html that holds the whole proj