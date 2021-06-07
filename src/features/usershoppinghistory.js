import { createAction, createReducer } from "@reduxjs/toolkit";

const addtousershoppinghistory = createAction('is adding to shopping history');

const actionsshoppinghistory = {addtousershoppinghistory};

const initialState = {
    currentusershoppinghistory: null
}

const reducershoppinghistory = createReducer(initialState, {
    [addtousershoppinghistory]: (state, action) => ({
        currentusershoppinghistory: action.payload
    })

})

export { actionsshoppinghistory, reducershoppinghistory};