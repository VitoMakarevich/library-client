import { combineReducers } from 'redux';
import books from './books';
import users from './users';
import requests from './requests';


const rootReducer = combineReducers({
    books,
    users,
    requests
  })
  
export default rootReducer;