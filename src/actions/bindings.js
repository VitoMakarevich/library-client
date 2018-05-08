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

export const SELECT_BINDING = 'SELECT_BINDING';
export function selectBinding(id) {
  return {
    type: SELECT_BINDING,
    id
  }
}

export const REQUEST_BINDINGS = 'REQUEST_BINDINGS';

export function requestBindings() {
    return {
        type: REQUEST_BINDINGS
    }
}

export const RECEIVE_BINDINGS = 'RECEIVE_BINDINGS'
export function receiveBindings(authors) {
  return {
    type: RECEIVE_BINDINGS,
    items: authors.data
  }
}

export function fetchBindings() {
  return async function (dispatch, getState) {
    dispatch(requestBindings());
    const result = await axios.get(`http://localhost:30300/bindings/`, {
      params: _flattenRequest(getState().requests.bindings)
    });
    return dispatch(receiveBindings(result));
  }
}

export const CHANGE_BINDINGS_REQUEST = 'CHANGE_BINDINGS_REQUEST';
export function changeBindingsRequest(request) {
    return {
      type: CHANGE_BINDINGS_REQUEST,
      request: request
    }
}

export const CHANGE_BINDINGS_REQUEST_AND_FETCH = 'CHANGE_BINDINGS_REQUEST_AND_FETCH';
export function changeBindingsRequestAndFetch(request) {
  return async function (dispatch) {
    dispatch(changeBindingsRequest(request));
    dispatch(fetchBindings())
  }
}

export function fetchBinding(id){
  return async function(dispatch) {
    dispatch(requestBindings());
    const result = await axios.get(`http://localhost:30300/bindings/${id}`)
    return dispatch(receiveBinding(result.data));
  }
}

export const DELETE_BINDING_BY_ID = 'DELETE_BINDING_BY_ID';
export function deleteBindingById(id){
  return async function(dispatch) {
    dispatch(requestBindings());
    const result = await axios.delete(`http://localhost:30300/bindings/${id}`)
    dispatch(fetchBindings({}))
    return dispatch(deleteBinding(result.data.id));
  }
}

export const DELETE_BINDING = 'DELETE_BINDING'
export function deleteBinding(id) {
  return {
    type: DELETE_BINDING,
    id: id
  }
}

export const UPDATE_BINDING_BY_ID = 'UPDATE_BINDING_BY_ID';
export function updateBindingById(id, request){
  console.log(1)
  return async function(dispatch) {
    dispatch(requestBindings());
    const result = await axios.put(`http://localhost:30300/bindings/${id}`, request)
    dispatch(fetchBindings({}))
    return dispatch(updateBinding(result.data.id, result.data));
  }
}

export const CREATE_BINDING = 'CREATE_BINDING';
export function createBinding(request){
  return async function(dispatch) {
    dispatch(requestBindings());
    const result = await axios.post(`http://localhost:30300/bindings/`, request)
    dispatch(fetchBindings({}))
    return dispatch(updateBinding(result.data.id, result.data));
  }
}

export const UPDATE_BINDING = 'UPDATE_BINDING'
export function updateBinding(id, data) {
  return {
    type: UPDATE_BINDING,
    id: id,
    data: data
  }
}




export const RECEIVE_BINDING = 'RECEIVE_BINDING'
export function receiveBinding(binding) {
  return {
    type: RECEIVE_BINDING,
    binding: binding
  }
}
