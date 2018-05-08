import { combineReducers } from 'redux';
import books from './books';
import users from './users';
import authors from './authors';
import requests from './requests';
import bindings from './bindings';


const rootReducer = combineReducers({
    books,
    authors,
    users,
    requests,
    bindings
  })
  
export default rootReducer;