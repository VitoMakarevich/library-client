import {UserActions} from '../actions';

function users(state = {
    isFetching: false,
    items: [],
    numItems: 0,
    request: {},
    byId: {}
  }, action) {
    switch (action.type) {
      case UserActions.REQUEST_USERS:
        return Object.assign({}, state, {
          isFetching: true
        }
      )
      case UserActions.RECEIVE_USERS:
        return Object.assign({}, state, {
          isFetching: false,
          items: action.items.users,
          numItems: action.items.numItems
        })
      case UserActions.RECEIVE_USER: 
        const userId = action.user.id;
        return Object.assign({}, state, {
          isFetching: false,
          byId: Object.assign({}, state.byId, {
            [userId]: action.user
          })
        })
      case UserActions.DELETE_USER: 
        let deleted = Object.assign({}, state.byId);
        delete deleted[action.id];
        return Object.assign({}, state, {
          isFetching: false,
          byId: Object.assign({}, deleted)
        });
      case UserActions.UPDATE_USER: 
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



  export default users;