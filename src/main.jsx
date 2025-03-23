import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Day0 from './days/day0.jsx'
import Day2 from './days/day2.jsx'
import Day3 from './days/day3/day3.jsx'
import "./index.css"; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Day3/>
  </StrictMode>
)
