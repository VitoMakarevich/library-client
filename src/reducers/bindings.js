import {BindingActions} from '../actions';

function bindings(state = {
    isFetching: false,
    items: [],
    numItems: 0,
    request: {},
    byId: {}
  }, action) {
    switch (action.type) {
      case BindingActions.REQUEST_BINDINGS:
        return Object.assign({}, state, {
          isFetching: true
        }
      )
      case BindingActions.RECEIVE_BINDINGS:
        return Object.assign({}, state, {
          isFetching: false,
          items: action.items.bindings,
          numItems: action.items.numItems
        })
      case BindingActions.RECEIVE_BINDING: 
        const bindingId = action.binding.id;
        return Object.assign({}, state, {
          isFetching: false,
          byId: Object.assign({}, state.byId, {
            [bindingId]: action.binding
          })
        })
      case BindingActions.DELETE_BINDING: 
        let deleted = Object.assign({}, state.byId);
        delete deleted[action.id];
        return Object.assign({}, state, {
          isFetching: false,
          byId: Object.assign({}, deleted)
        });
      case BindingActions.UPDATE_BINDING: 
        const updated = Object.assign({}, state.byId, {
          [action.id]: action.data
        });
        return Object.assign({}, state, {
          isFetching: false,
          byId: Object.assign({}, updated)
        });
      default:
        return state
    }
  }



  export default bindings;