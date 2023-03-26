import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import Footer from './components/Footer'
import './assets/css/App.css'
import './assets/css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='wrapper'>
      <App />
      <Footer />
    </div>
  </React.StrictMode>,
)
