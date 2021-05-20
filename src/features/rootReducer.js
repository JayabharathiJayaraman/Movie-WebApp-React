import { combineReducers } from "redux";
import { reducer as movieReducer } from './movie';
import { reducerh as highlightmovieReducer } from './highlightmovie';


const rootReducer = combineReducers({
    movie: movieReducer,
    highlightmovie: highlightmovieReducer
})

export { rootReducer };