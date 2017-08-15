import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch } from 'react-router-dom'
import { Provider as RebassProvider } from 'rebass'
import App from './App'
import Results from './Results'
import registerServiceWorker from './registerServiceWorker'
import theme from './theme'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
} from 'react-router-redux'
import quizReducer from './ducks/quiz'
import GiftContainer from './containers/GiftContainer'

import 'url-search-params-polyfill'

const history = createHistory()
const middlewares = [routerMiddleware(history)]

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger')
  middlewares.push(logger)
}

const store = createStore(
  combineReducers({
    quiz: quizReducer,
    router: routerReducer,
  }),
  applyMiddleware(...middlewares)
)

const NotFound = () => <h1>Not Found</h1>

ReactDOM.render(
  <Provider store={store}>
    <RebassProvider theme={theme}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/results" exact component={Results} />
          <Route path="/gifts/:gift" exact component={GiftContainer} />
          <Route component={NotFound} />
        </Switch>
      </ConnectedRouter>
    </RebassProvider>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
