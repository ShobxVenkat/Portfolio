import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import '@fontsource-variable/space-grotesk';
import '@fontsource/poppins';
import '@fontsource/cedarville-cursive';
import ReactLenis from "lenis/react"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactLenis root>
   <App />
    </ReactLenis>
 
  </StrictMode>,
)
