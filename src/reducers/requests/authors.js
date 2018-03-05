import {AuthorRequestActions} from '../../actions/requests';

function authors(state = {
  filter: {},
  sorter: {},
  pagination: {}
}, action) {
    switch (action.type) {
      case AuthorRequestActions.ADD_AUTHORS_FILTER:
        return Object.assign({}, state, {filter: action.filter}, {pagination: {}})
      case AuthorRequestActions.ADD_AUTHORS_PAGINATION:
        return Object.assign({}, state, {pagination:  action.pagination})
      case AuthorRequestActions.ADD_AUTHORS_SORTER:
        return Object.assign({}, state, {sorter: action.sorter});
      case AuthorRequestActions.RESET_AUTHORS_REQUEST:
        return {};
      default:
        return state
    }
  }



  export default authors;