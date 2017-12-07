import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import {Provider} from "react-redux"

import {createStore , compose , applyMiddleware} from "redux"
import allReducers from "./reducers/index.js"
import thunk from "redux-thunk"
import promise from "redux-promise"

const store = createStore(
  allReducers ,
  compose(
      applyMiddleware(thunk, promise),
    ))

ReactDOM.render(
  <Provider  store = {store}>
    <App />
  </Provider>
  , document.getElementById('root'))

registerServiceWorker()
