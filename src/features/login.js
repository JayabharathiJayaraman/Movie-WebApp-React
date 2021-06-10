import { createAction, createReducer } from "@reduxjs/toolkit";

const login = createAction('is ligging in');
const logout = createAction('is logging out');

const actionsLogin = {login, logout};

const initialState = {
    currentuser: null
}

const reducerlogin = createReducer(initialState, {
    [login]: (state, action) => ({
        currentuser: action.payload
    }),

    [logout]: (state,action) => ({
        currentuser : null
    })

})

export { actionsLogin, reducerlogin};