import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import { Router } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import configureStore from './redux/store/configureStore'

const store = configureStore();
export const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Main />
    </Router>
  </Provider>,
  document.getElementById("root")
);