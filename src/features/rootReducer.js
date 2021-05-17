import { combineReducers } from "redux";
import { reducer as movieReducer } from './movie';


const rootReducer = combineReducers({
    movie: movieReducer
})

export { rootReducer };