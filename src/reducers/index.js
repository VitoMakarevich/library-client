import { combineReducers } from 'redux';
import books from './books';
import users from './users';
import authors from './authors';
import requests from './requests';


const rootReducer = combineReducers({
    books,
    authors,
    users,
    requests
  })
  
export default rootReducer;