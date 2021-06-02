import { createAction, createReducer } from "@reduxjs/toolkit";


const isFetching = createAction('is fetching');
const success = createAction('success');
const clearMovies = createAction('more movies');
const failure = createAction('failure');

const actions = {isFetching, success, clearMovies ,failure};

const STATUS = {
    NORMAL: 'normal',
    FETCHING: 'is fetching',
    SUCCESS: 'success',
    CLEARMOVIES: 'clearMovies',
    FAILURE: 'failure'
}

const initialState = {
    status:  STATUS.NORMAL,
    movies: []
}

const reducer = createReducer(initialState, {
    [isFetching]: (state, action) => ({
        ...state,
        status: STATUS.FETCHING
    }),  
    [clearMovies]: (state, action) => ({
        status: STATUS.CLEARMOVIES,

        movies: []
        

    }),
    [success]: (state, action) => {
        console.log('in success')
        let found = 'false'
        state.movies.forEach(item => {
            if(item.imdbID === action.payload.imdbID){
                found = 'true'

            }
        });
        if(found === 'false'){
            return ({
                status: STATUS.SUCCESS,
                movies: [...state.movies, action.payload]    
            })
        }else{
            return ({
                ...state,
        status: STATUS.SUCCESS
            })
        }
    },

    [failure]: (state, action) => ({
        ...state,
        status: STATUS.FAILURE
    })

})

export { actions, reducer, STATUS};