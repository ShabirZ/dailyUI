import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Day0 from './days/day0.jsx'
import "./index.css"; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Day0/>
  </StrictMode>
)
