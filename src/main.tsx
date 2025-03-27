import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App'
import Result from './components/Result'
import Summary from './components/Summary'
import './styles/main.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />

    <Result />

    <Summary />
  </StrictMode>,
)
