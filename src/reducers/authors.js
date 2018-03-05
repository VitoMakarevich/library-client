import {AuthorActions} from '../actions';

function authors(state = {
    isFetching: false,
    items: [],
    numItems: 0,
    request: {},
    byId: {}
  }, action) {
    switch (action.type) {
      case AuthorActions.REQUEST_AUTHORS:
        return Object.assign({}, state, {
          isFetching: true
        }
      )
      case AuthorActions.RECEIVE_AUTHORS:
        return Object.assign({}, state, {
          isFetching: false,
          items: action.items.authors,
          numItems: action.items.numItems
        })
      case AuthorActions.RECEIVE_AUTHOR: 
        const authorId = action.author.id;
        return Object.assign({}, state, {
          isFetching: false,
          byId: Object.assign({}, state.byId, {
            [authorId]: action.author
          })
        })
      case AuthorActions.DELETE_AUTHOR: 
        let deleted = Object.assign({}, state.byId);
        delete deleted[action.id];
        return Object.assign({}, state, {
          isFetching: false,
          byId: Object.assign({}, deleted)
        });
      case AuthorActions.UPDATE_AUTHOR: 
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



  export default authors;