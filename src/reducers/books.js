import {BookActions} from '../actions';

function books(state = {
    isFetching: false,
    items: [],
    numItems: 0,
    request: {},
    byId: {}
  }, action) {
    switch (action.type) {
      case BookActions.REQUEST_BOOKS:
        return Object.assign({}, state, {
          isFetching: true
        }
      )
      case BookActions.RECEIVE_BOOKS:
        return Object.assign({}, state, {
          isFetching: false,
          items: action.items.books,
          numItems: action.items.numItems
        })
      case BookActions.RECEIVE_BOOK: 
        const bookId = action.book.id;
        return Object.assign({}, state, {
          isFetching: false,
          byId: Object.assign({}, state.byId, {
            [bookId]: action.book
          })
        })
      case BookActions.DELETE_BOOK: 
        let deleted = Object.assign({}, state.byId);
        delete deleted[action.id];
        return Object.assign({}, state, {
          isFetching: false,
          byId: Object.assign({}, deleted)
        });
      case BookActions.UPDATE_BOOK: 
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



  export default books;