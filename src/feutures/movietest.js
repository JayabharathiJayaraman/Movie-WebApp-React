import { createAction, createReducer } from "@reduxjs/toolkit";

const isFetching = createAction('is fetching')
const success = createAction('success')
const failure = createAction('failure')

const actions = {isFetching, success, failure}

const STATUS = {
    NORMAL: 'normal',
    FETCHING: 'is fetching',
    SUCCESS: 'success',
    FAILURE: 'failure'
}

const initialState = {
    status: STATUS.NORMAL,
    img: null,
    title: null
}

const reducer = createReducer(initialState, {
    [isFetching]: (state, action) => ({
        ...state,
        status: STATUS.FETCHING
    }),
    [success]: (state, action) => ({
        status: STATUS.SUCCESS,
        img: action.payload,
        title: action.payload
    }),
    [failure]: (state, action) => ({
        ...state,
        status: STATUS.FAILURE
    })

})

export { actions, reducer, STATUS}