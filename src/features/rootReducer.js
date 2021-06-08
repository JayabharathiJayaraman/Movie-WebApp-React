import { combineReducers } from "redux";
import { reducer as movieReducer } from './movie';
import { reducerh as highlightmovieReducer } from './highlightmovie';
import {reducershopcart as shopcartReducer} from './shoppingcart'
import {reducerCurrentScreen as actionssetCurrentScreenReducer} from './currentscreen'
import {reducerlogin as loginReducer} from './login'
import {reducershoppinghistory as shoppinghistoryReducer} from './usershoppinghistory'

const rootReducer = combineReducers({
    movie: movieReducer,
    highlightmovie: highlightmovieReducer,
    shopc: shopcartReducer,
    currentscrn: actionssetCurrentScreenReducer,
    login: loginReducer,
    shoppinghistory: shoppinghistoryReducer
})

export { rootReducer };