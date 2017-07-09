import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'rebass'
import App from './App'
import Results from './Results'
import registerServiceWorker from './registerServiceWorker'
import theme from './theme'

import 'url-search-params-polyfill'

const NotFound = () => <h1>Not Found</h1>

ReactDOM.render(
  <Provider theme={theme}>
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/results" exact component={Results} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
