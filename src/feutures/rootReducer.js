import { combineReducers } from "redux";
import { reducer as movieReducer} from './movietest'
import {reducer as searchReducer} from './search'
const rootReducer = combineReducers({
    movie: movieReducer,
    search: searchReducer
})
export { rootReducer}