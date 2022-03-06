import React from 'react'
import ReactDOM from 'react-dom'
// import './static/css/soft-ui-dashboard.css'
import './styles/main.css'
import 'react-toastify/dist/ReactToastify.css';

import App from './App'

export function mount(rootElement = 'root') {
   ReactDOM.render((
      <App />
   ), document.getElementById(rootElement))
}
