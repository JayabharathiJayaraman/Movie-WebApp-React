import { createAction, createReducer } from "@reduxjs/toolkit";


const isFetching = createAction('is fetching');
const success = createAction('success');
const failure = createAction('failure');

const actionsh = {isFetching, success, failure};

const STATUSh = {
    NORMAL: 'normal',
    FETCHING: 'is fetching',
    SUCCESS: 'success',
    FAILURE: 'failure'
}

const initialState = {
    statush:  STATUSh.NORMAL,
    selectedmovie: null
}

const reducerh = createReducer(initialState, {
    [isFetching]: (state, action) => ({
        ...state,
        statush: STATUSh.FETCHING
    }),  
    [success]: (state, action) => ({
        statush: STATUSh.SUCCESS,
        selectedmovie: action.payload
    }),
    [failure]: (state, action) => ({
        ...state,
        statush: STATUSh.FAILURE
    })

})

export { actionsh, reducerh, STATUSh};