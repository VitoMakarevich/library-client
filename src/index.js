import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import reducers from './reducers'
import thunkMiddleware from 'redux-thunk'

import {BookActions} from './actions'

const store = createStore(
  reducers,
  applyMiddleware(thunkMiddleware)
)


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter >
        <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

store.dispatch(BookActions.fetchBooks({})).then((res) => console.log(res));

registerServiceWorker();
