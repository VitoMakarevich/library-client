import {UserActions} from '../actions';

function users(state = {
    isFetching: false,
    items: [],
    numItems: 0,
    request: {}
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
      default:
        return state
    }
  }



  export default users;