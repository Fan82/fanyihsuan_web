import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/collection.css'
import App from './App.jsx'

// Home restores its own scroll position (see pages/Home.jsx); stop the
// browser's restoration from racing it on back/forward.
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
