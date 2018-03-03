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