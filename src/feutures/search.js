import { createAction, createReducer } from "@reduxjs/toolkit";

const isFetching_search = createAction('is fetching search')
const new_search = createAction('new search')
const success_search = createAction('success search')
const failure_search = createAction('failure search')

const actions_search = {isFetching_search, new_search, success_search, failure_search
}

const STATUS_SEARCH = {
    NORMAL: 'normal',
    FETCHING: 'isFetching_search',
    NEW: 'new search',
    SUCCESS: 'success_search',
    FAILURE: 'failure_search'
}

const initialState = {
    status: STATUS_SEARCH.NORMAL,
    search: null
}

const reducer_search = createReducer(initialState, {
    [new_search]: (state, action) => ({
        status: STATUS_SEARCH.SUCCESS_NEW,
        search: [[action.payload]]
    }),
    [isFetching_search]: (state, action) => ({
        ...state,
        status: STATUS_SEARCH.FETCHING
    }),
    [success_search]: (state, action) => ({
        status: STATUS_SEARCH.SUCCESS,
        search: [...state.search, [action.payload]]
    }),
    [failure_search]: (state, action) => ({
        ...state,
        status: STATUS_SEARCH.FAILURE
    })
})
export { actions_search, reducer_search, STATUS_SEARCH}
