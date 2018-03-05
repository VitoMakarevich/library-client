export const ADD_AUTHORS_FILTER = 'ADD_AUTHORS_FILTER';
export function addAuthorsFilter(filter) {
    return {
        type: ADD_AUTHORS_FILTER,
        filter: filter
    }
}


export const ADD_AUTHORS_SORTER = 'ADD_AUTHORS_SORTER';
export function addAuthorsSorter(sorter) {
    return {
        type: ADD_AUTHORS_SORTER,
        sorter: sorter
    }
}


export const ADD_AUTHORS_PAGINATION = 'ADD_AUTHORS_PAGINATION';
export function addAuthorsPagination(pagination) {
    return {
        type: ADD_AUTHORS_PAGINATION,
        pagination: pagination
    }
}


export const RESET_AUTHORS_REQUEST = 'RESET_AUTHORS_REQUEST';
export function resetAuthorsRequest() {
    return {
        type: RESET_AUTHORS_REQUEST
    }
}

