import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

export function mount(rootElement = 'root') {
   ReactDOM.render((
      <App />
   ), document.getElementById(rootElement))
}
