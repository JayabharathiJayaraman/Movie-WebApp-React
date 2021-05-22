import { combineReducers } from "redux";
import { reducer as movieReducer } from './movie';
import { reducerh as highlightmovieReducer } from './highlightmovie';
import {reducershopcart as shopcartReducer} from './shoppingcart'
import {reducerCurrentScreen as actionssetCurrentScreenReducer} from './currentscreen'

const rootReducer = combineReducers({
    movie: movieReducer,
    highlightmovie: highlightmovieReducer,
    shopc: shopcartReducer,
    currentscrn: actionssetCurrentScreenReducer
})

export { rootReducer };