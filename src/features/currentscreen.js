import { createAction, createReducer } from "@reduxjs/toolkit";


const setCurrentScreen = createAction('setCurrentScreen');

const actionssetCurrentScreen = {setCurrentScreen};


const initialState = {
    currentscreen: 'movie'
}

const reducerCurrentScreen = createReducer(initialState, {
     
    [setCurrentScreen]: (state, action) => ({
        currentscreen: action.payload
    })

})

export { actionssetCurrentScreen, reducerCurrentScreen};