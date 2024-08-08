import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CurrentPageNumberCtxProvider } from './lib/contexts/currentPageNumber.ctx.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CurrentPageNumberCtxProvider>
    <App />
    </CurrentPageNumberCtxProvider>
  </StrictMode>,
)
