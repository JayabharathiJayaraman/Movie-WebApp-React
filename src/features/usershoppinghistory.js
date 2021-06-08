import { createAction, createReducer } from "@reduxjs/toolkit";

const addtousershoppinghistory = createAction('is adding to shopping history');
const resetusershoppinghistory = createAction('is resetting to shopping history');

const actionsshoppinghistory = {addtousershoppinghistory, resetusershoppinghistory};

const initialState = {
    currentusershoppinghistory: []
}

const reducershoppinghistory = createReducer(initialState, {
    [addtousershoppinghistory]: (state, action) => ({
        currentusershoppinghistory: [...state.currentusershoppinghistory, action.payload]
    }),
    [resetusershoppinghistory]: (state, action) => ({
        currentusershoppinghistory: []
    })

})

export { actionsshoppinghistory, reducershoppinghistory};