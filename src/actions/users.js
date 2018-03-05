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

export const SELECT_USER = 'SELECT_USER';
export function selectUser(id) {
  return {
    type: SELECT_USER,
    id
  }
}

export const REQUEST_USERS = 'REQUEST_USERS';

export function requestUsers() {
    return {
        type: REQUEST_USERS
    }
}

export const RECEIVE_USERS = 'RECEIVE_USERS'
export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    items: users.data
  }
}

export function fetchUsers() {
  return async function (dispatch, getState) {
    dispatch(requestUsers());
    const result = await axios.get(`http://localhost:30300/users/`, {
      params: _flattenRequest(getState().requests.users)
    });
    return dispatch(receiveUsers(result));
  }
}

export const CHANGE_USERS_REQUEST = 'CHANGE_USERS_REQUEST';
export function changeUsersRequest(request) {
    return {
      type: CHANGE_USERS_REQUEST,
      request: request
    }
}

export const CHANGE_USERS_REQUEST_AND_FETCH = 'CHANGE_USERS_REQUEST_AND_FETCH';
export function changeUsersRequestAndFetch(request) {
  return async function (dispatch) {
    dispatch(changeUsersRequest(request));
    dispatch(fetchUsers())
  }
}

export function fetchUser(id){
  return async function(dispatch) {
    dispatch(requestUsers());
    const result = await axios.get(`http://localhost:30300/users/${id}`)
    return dispatch(receiveUser(result.data));
  }
}

export const DELETE_USER_BY_ID = 'DELETE_USER_BY_ID';
export function deleteUserById(id){
  return async function(dispatch) {
    dispatch(requestUsers());
    const result = await axios.delete(`http://localhost:30300/users/${id}`)
    dispatch(fetchUsers({}))
    return dispatch(deleteUser(result.data.id));
  }
}

export const DELETE_USER = 'DELETE_USER'
export function deleteUser(id) {
  return {
    type: DELETE_USER,
    id: id
  }
}

export const UPDATE_USER_BY_ID = 'UPDATE_USER_BY_ID';
export function updateUserById(id, request){
  return async function(dispatch) {
    dispatch(requestUsers());
    const result = await axios.put(`http://localhost:30300/users/${id}`, request)
    dispatch(fetchUsers({}))
    return dispatch(updateUser(result.data.id, result.data));
  }
}

export const CREATE_USER = 'CREATE_USER';
export function createUser(request){
  return async function(dispatch) {
    dispatch(requestUsers());
    const result = await axios.post(`http://localhost:30300/users/`, request)
    dispatch(fetchUsers({}))
    return dispatch(updateUser(result.data.id, result.data));
  }
}

export const UPDATE_USER = 'UPDATE_USER'
export function updateUser(id, data) {
  return {
    type: UPDATE_USER,
    id: id,
    data: data
  }
}




export const RECEIVE_USER = 'RECEIVE_USER'
export function receiveUser(user) {
  return {
    type: RECEIVE_USER,
    user: user
  }
}
