export const ADD_BOOKS_FILTER = 'ADD_BOOKS_FILTER';
export function addBooksFilter(filter) {
    return {
        type: ADD_BOOKS_FILTER,
        filter: filter
    }
}


export const ADD_BOOKS_SORTER = 'ADD_BOOKS_SORTER';
export function addBooksSorter(sorter) {
    return {
        type: ADD_BOOKS_SORTER,
        sorter: sorter
    }
}


export const ADD_BOOKS_PAGINATION = 'ADD_BOOKS_PAGINATION';
export function addBooksPagination(pagination) {
    return {
        type: ADD_BOOKS_PAGINATION,
        pagination: pagination
    }
}


export const RESET_BOOKS_REQUEST = 'RESET_BOOKS_REQUEST';
export function resetBooksRequest() {
    return {
        type: RESET_BOOKS_REQUEST
    }
}

