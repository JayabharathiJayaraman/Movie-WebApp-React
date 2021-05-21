import { createAction, createReducer } from "@reduxjs/toolkit";

const isFetching_search = createAction('is fetching search')
const success_search = createAction('success search')
const failure_search = createAction('failure search')

const actions = {isFetching_search, success_search, failure_search
}

const STATUS = {
    NORMAL: 'normal',
    FETCHING: 'isFetching_search',
    SUCCESS: 'success_search',
    FAILURE: 'failure_search'
}

const initialState = {
    status: STATUS.NORMAL,
    search: []
}

const reducer = createReducer(initialState, {
    [isFetching_search]: (state, action) => ({
        ...state,
        status: STATUS.FETCHING
    }),
    [success_search]: (state, action) => ({
        status: STATUS.SUCCESS,
        search: [state.search, ...action.payload]
    }),
    [failure_search]: (state, action) => ({
        ...state,
        status: STATUS.FAILURE
    })
})

export { actions, reducer, STATUS}