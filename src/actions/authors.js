import axios from 'axios';

function _flattenRequest(request){
  const flattenObj = {};
  Object.keys(request).forEach((requestKey) => {
    Object.keys(request[requestKey]).forEach((innerKey) => {
      flattenObj[innerKey] = request[requestKey][innerKey];
    })
  })
  return flattenObj;
}

export const SELECT_AUTHOR = 'SELECT_AUTHOR';
export function selectAuthor(id) {
  return {
    type: SELECT_AUTHOR,
    id
  }
}

export const REQUEST_AUTHORS = 'REQUEST_AUTHORS';

export function requestAuthors() {
    return {
        type: REQUEST_AUTHORS
    }
}

export const RECEIVE_AUTHORS = 'RECEIVE_AUTHORS'
export function receiveAuthors(authors) {
  return {
    type: RECEIVE_AUTHORS,
    items: authors.data
  }
}

export function fetchAuthors() {
  return async function (dispatch, getState) {
    dispatch(requestAuthors());
    const result = await axios.get(`http://localhost:30300/authors/`, {
      params: _flattenRequest(getState().requests.authors)
    });
    return dispatch(receiveAuthors(result));
  }
}

export const CHANGE_AUTHORS_REQUEST = 'CHANGE_AUTHORS_REQUEST';
export function changeAuthorsRequest(request) {
    return {
      type: CHANGE_AUTHORS_REQUEST,
      request: request
    }
}

export const CHANGE_AUTHORS_REQUEST_AND_FETCH = 'CHANGE_AUTHORS_REQUEST_AND_FETCH';
export function changeAuthorsRequestAndFetch(request) {
  return async function (dispatch) {
    dispatch(changeAuthorsRequest(request));
    dispatch(fetchAuthors())
  }
}

export function fetchAuthor(id){
  return async function(dispatch) {
    dispatch(requestAuthors());
    const result = await axios.get(`http://localhost:30300/authors/${id}`)
    return dispatch(receiveAuthor(result.data));
  }
}

export const DELETE_AUTHOR_BY_ID = 'DELETE_AUTHOR_BY_ID';
export function deleteAuthorById(id){
  return async function(dispatch) {
    dispatch(requestAuthors());
    const result = await axios.delete(`http://localhost:30300/authors/${id}`)
    dispatch(fetchAuthors({}))
    return dispatch(deleteAuthor(result.data.id));
  }
}

export const DELETE_AUTHOR = 'DELETE_AUTHOR'
export function deleteAuthor(id) {
  return {
    type: DELETE_AUTHOR,
    id: id
  }
}

export const UPDATE_AUTHOR_BY_ID = 'UPDATE_AUTHOR_BY_ID';
export function updateAuthorById(id, request){
  console.log(1)
  return async function(dispatch) {
    dispatch(requestAuthors());
    const result = await axios.put(`http://localhost:30300/authors/${id}`, request)
    dispatch(fetchAuthors({}))
    return dispatch(updateAuthor(result.data.id, result.data));
  }
}

export const CREATE_AUTHOR = 'CREATE_AUTHOR';
export function createAuthor(request){
  return async function(dispatch) {
    dispatch(requestAuthors());
    const result = await axios.post(`http://localhost:30300/authors/`, request)
    dispatch(fetchAuthors({}))
    return dispatch(updateAuthor(result.data.id, result.data));
  }
}

export const UPDATE_AUTHOR = 'UPDATE_AUTHOR'
export function updateAuthor(id, data) {
  return {
    type: UPDATE_AUTHOR,
    id: id,
    data: data
  }
}




export const RECEIVE_AUTHOR = 'RECEIVE_AUTHOR'
export function receiveAuthor(author) {
  return {
    type: RECEIVE_AUTHOR,
    author: author
  }
}
