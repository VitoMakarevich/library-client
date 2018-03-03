export const ADD_USERS_FILTER = 'ADD_USERS_FILTER';
export function addUsersFilter(filter) {
    return {
        type: ADD_USERS_FILTER,
        filter: filter
    }
}


export const ADD_USERS_SORTER = 'ADD_USERS_SORTER';
export function addUsersSorter(sorter) {
    return {
        type: ADD_USERS_SORTER,
        sorter: sorter
    }
}


export const ADD_USERS_PAGINATION = 'ADD_USERS_PAGINATION';
export function addUsersPagination(pagination) {
    return {
        type: ADD_USERS_PAGINATION,
        pagination: pagination
    }
}