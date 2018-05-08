import {BookRequestActions} from '../../actions/requests';

function books(state = {
  filter: {},
  sorter: {},
  pagination: {}
}, action) {
    switch (action.type) {
      case BookRequestActions.ADD_BOOKS_FILTER:
        return Object.assign({}, state, {filter: action.filter}, {pagination: {}})
      case BookRequestActions.ADD_BOOKS_PAGINATION:
        return Object.assign({}, state, {pagination:  action.pagination})
      case BookRequestActions.ADD_BOOKS_SORTER:
        return Object.assign({}, state, {sorter: action.sorter});
      case BookRequestActions.RESET_BOOKS_REQUEST:
        return {};
      default:
        return state
    }
  }



  export default books;