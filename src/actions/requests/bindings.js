export const ADD_BINDINGS_FILTER = 'ADD_BINDINGS_FILTER';
export function addBindingsFilter(filter) {
    return {
        type: ADD_BINDINGS_FILTER,
        filter: filter
    }
}


export const ADD_BINDINGS_SORTER = 'ADD_BINDINGS_SORTER';
export function addBindingsSorter(sorter) {
    return {
        type: ADD_BINDINGS_SORTER,
        sorter: sorter
    }
}


export const ADD_BINDINGS_PAGINATION = 'ADD_BINDINGS_PAGINATION';
export function addBindingsPagination(pagination) {
    return {
        type: ADD_BINDINGS_PAGINATION,
        pagination: pagination
    }
}


export const RESET_BINDINGS_REQUEST = 'RESET_BINDINGS_REQUEST';
export function resetBindingsRequest() {
    return {
        type: RESET_BINDINGS_REQUEST
    }
}

