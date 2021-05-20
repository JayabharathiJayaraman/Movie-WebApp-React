import { combineReducers } from "redux";
import { reducer as movieReducer } from './movie';
import { reducerh as highlightmovieReducer } from './highlightmovie';
import {reducershopcart as shopcartReducer} from './shoppingcart'


const rootReducer = combineReducers({
    movie: movieReducer,
    highlightmovie: highlightmovieReducer,
    shopc: shopcartReducer
})

export { rootReducer };