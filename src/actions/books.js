import axios from 'axios';

function _flattenRequest(request){
  console.log(request)
  const flattenObj = {};
  Object.keys(request).forEach((requestKey) => {
    Object.keys(request[requestKey]).forEach((innerKey) => {
      flattenObj[innerKey] = request[requestKey][innerKey];
    })
  })
  return flattenObj;
}

export const SELECT_BOOK = 'SELECT_BOOK';
export function selectBook(id) {
  return {
    type: SELECT_BOOK,
    id
  }
}

export const REQUEST_BOOKS = 'REQUEST_BOOKS';

export function requestBooks() {
    return {
        type: REQUEST_BOOKS
    }
}

export const RECEIVE_BOOKS = 'RECEIVE_BOOKS'
export function receiveBooks(books) {
  return {
    type: RECEIVE_BOOKS,
    items: books.data
  }
}

export function fetchBooks() {
  return async function (dispatch, getState) {
    dispatch(requestBooks());
    const result = await axios.get(`http://localhost:30300/books/`, {
      params: _flattenRequest(getState().requests.books)
    });
    return dispatch(receiveBooks(result));
  }
}

export const CHANGE_BOOKS_REQUEST = 'CHANGE_BOOKS_REQUEST';
export function changeBooksRequest(request) {
    return {
      type: CHANGE_BOOKS_REQUEST,
      request: request
    }
}

export const CHANGE_BOOKS_REQUEST_AND_FETCH = 'CHANGE_BOOKS_REQUEST_AND_FETCH';
export function changeBooksRequestAndFetch(request) {
  return async function (dispatch) {
    dispatch(changeBooksRequest(request));
    dispatch(fetchBooks())
  }
}

export function fetchBook(id){
  return async function(dispatch) {
    dispatch(requestBooks());
    const result = await axios.get(`http://localhost:30300/books/${id}`)
    return dispatch(receiveBook(result.data));
  }
}

export const DELETE_BOOK_BY_ID = 'DELETE_BOOK_BY_ID';
export function deleteBookById(id){
  return async function(dispatch) {
    dispatch(requestBooks());
    const result = await axios.delete(`http://localhost:30300/books/${id}`)
    dispatch(fetchBooks({}))
    return dispatch(deleteBook(result.data.id));
  }
}

export const DELETE_BOOK = 'DELETE_BOOK'
export function deleteBook(id) {
  return {
    type: DELETE_BOOK,
    id: id
  }
}

export const UPDATE_BOOK_BY_ID = 'UPDATE_BOOK_BY_ID';
export function updateBookById(id, request){
  console.log(1)
  return async function(dispatch) {
    dispatch(requestBooks());
    const result = await axios.put(`http://localhost:30300/books/${id}`, request)
    dispatch(fetchBooks({}))
    return dispatch(updateBook(result.data.id, result.data));
  }
}

export const CREATE_BOOK = 'CREATE_BOOK';
export function createBook(request){
  return async function(dispatch) {
    dispatch(requestBooks());
    const result = await axios.post(`http://localhost:30300/books/`, request)
    dispatch(fetchBooks({}))
    return dispatch(updateBook(result.data.id, result.data));
  }
}

export const UPDATE_BOOK = 'UPDATE_BOOK'
export function updateBook(id, data) {
  return {
    type: UPDATE_BOOK,
    id: id,
    data: data
  }
}




export const RECEIVE_BOOK = 'RECEIVE_BOOK'
export function receiveBook(book) {
  return {
    type: RECEIVE_BOOK,
    book: book
  }
}
