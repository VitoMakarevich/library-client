import { combineReducers } from 'redux';
import users from './users';
import authors from './authors';


const rootReducer = combineReducers({
    users,
    authors
  })
  
export default rootReducer;