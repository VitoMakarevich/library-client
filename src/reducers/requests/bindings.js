import {BindingRequestActions} from '../../actions/requests';

function bindings(state = {
  filter: {},
  sorter: {},
  pagination: {}
}, action) {
    switch (action.type) {
      case BindingRequestActions.ADD_BINDINGS_FILTER:
        return Object.assign({}, state, {filter: action.filter}, {pagination: {}})
      case BindingRequestActions.ADD_BINDINGS_PAGINATION:
        return Object.assign({}, state, {pagination:  action.pagination})
      case BindingRequestActions.ADD_BINDINGS_SORTER:
        return Object.assign({}, state, {sorter: action.sorter});
      case BindingRequestActions.RESET_BINDINGS_REQUEST:
        return {};
      default:
        return state
    }
  }



  export default bindings;