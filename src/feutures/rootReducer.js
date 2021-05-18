import { combineReducers } from "redux";
import { reducer as movieReducer} from './movietest'
const rootReducer = combineReducers({
    movie: movieReducer
})
export { rootReducer}