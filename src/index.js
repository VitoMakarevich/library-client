import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import reducers from './reducers'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import {BookActions, UserActions} from './actions'

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware),
    // other store enhancers if any
));


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter >
        <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
