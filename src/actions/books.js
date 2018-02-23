import axios from 'axios';

export const SELECT_BOOK = 'SELECT_BOOK';

export function selectBook(id) {
  return {
    type: SELECT_BOOK,
    id
  }
}

export const REQUEST_BOOKS = 'REQUEST_BOOKS';

export function requestBooks(selector) {
    return {
        type: REQUEST_BOOKS,
        request: selector
    }
    
}

export const RECEIVE_BOOKS = 'RECEIVE_BOOKS'
export function receiveBooks(selector, books) {
  return {
    type: RECEIVE_BOOKS,
    books: books.data
  }
}

export function fetchBooks(selector) {
  return async function (dispatch) {
    dispatch(requestBooks(selector));
    const result = await axios.get(`http://localhost:30300/books/`, {params: selector});
    return dispatch(receiveBooks(selector, result));
  }
}