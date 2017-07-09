import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'rebass'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import theme from './theme'

ReactDOM.render(
  <Provider theme={theme}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
