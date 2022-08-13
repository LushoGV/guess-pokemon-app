import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "nes.css/css/nes.min.css";
import {ScoreProvider} from './context/scoreContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ScoreProvider>
      <App />
    </ScoreProvider>
  </React.StrictMode>
)
