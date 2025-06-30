import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MenuProvider } from "./context/MenuContext.tsx";
import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MenuProvider>
      <App />
    </MenuProvider>
  </StrictMode>,
)
