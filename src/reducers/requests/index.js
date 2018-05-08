import { combineReducers } from 'redux';
import users from './users';
import authors from './authors';
import books from './books';
import bindings from './bindings';


const rootReducer = combineReducers({
    users,
    authors,
    books,
    bindings
  })
  
export default rootReducer;