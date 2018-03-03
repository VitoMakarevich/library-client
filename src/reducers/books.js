import {BookActions} from '../actions';

function books(state = {
    isFetching: false,
    books: {}
  }, action) {
    switch (action.type) {
      case BookActions.REQUEST_BOOKS:
        return Object.assign({}, state, {
          isFetching: true,
        })
      case BookActions.RECEIVE_BOOKS:
        const books = {};
        action.books.forEach((book) => {
          books[book.id] = book;
        });
        return Object.assign({}, state, {
          isFetching: false
        },
        books  
      )
      default:
        return state
    }
  }

  export default books;