import {UserRequestActions} from '../../actions/requests';

function users(state = {
  filter: {},
  sorter: {},
  pagination: {}
}, action) {
    switch (action.type) {
      case UserRequestActions.ADD_USERS_FILTER:
        return Object.assign({}, state, {filter: action.filter}, {pagination: {}})
      case UserRequestActions.ADD_USERS_PAGINATION:
        return Object.assign({}, state, {pagination:  action.pagination})
      case UserRequestActions.ADD_USERS_SORTER:
        return Object.assign({}, state, {sorter: action.sorter});
      case UserRequestActions.RESET_USERS_REQUEST:
        return {};
      default:
        return state
    }
  }



  export default users;