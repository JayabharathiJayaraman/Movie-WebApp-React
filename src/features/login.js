import { createAction, createReducer } from "@reduxjs/toolkit";

const login = createAction('is ligging in');

const actionsLogin = {login};

const initialState = {
    currentuser: null
}

const reducerlogin = createReducer(initialState, {
    [login]: (state, action) => ({
        currentuser: action.payload
    })

})

export { actionsLogin, reducerlogin};