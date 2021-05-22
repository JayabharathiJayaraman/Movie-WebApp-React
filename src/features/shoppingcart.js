import { createAction, createReducer } from "@reduxjs/toolkit";


const addToCart = createAction('add to cart');
const removeFromCart = createAction('remove from cart');
const increaseAmount = createAction('increase amount');
const decreaseAmont = createAction('decreaseAmount');

const actionsshopcart = {addToCart, removeFromCart, increaseAmount, decreaseAmont };


const initialState = [
 
    {
        movie: {imdbID: 'tt0936501',Title: 'Taken', Year: '2020'},
        count: 1
    }
]

const reducershopcart = createReducer(initialState, {
    [addToCart]: (state, action) => {
        console.log('payload: ', action.payload.imdbID);
        let found = state.find(cartItem => cartItem.movie.imdbID === action.payload.imdbID);
        if( found ) {
            const newState =state.map(cartItem => {
                if (cartItem.movie.imdbID === action.payload.imdbID) {
                    console.log('count: ', cartItem.count);
                    return { ...cartItem, count: cartItem.count + 1 }
                    
                } else {
                    return cartItem;
                }
            })  
            return newState;

        } else {
            return [
                ...state,
                {movie: action.payload, count: 1}
            ];
        }
        

    },

    [increaseAmount]: (state, action) => (
        state.map(cartItem => {
            if (cartItem.movie.imdbid === action.payload.imdbid) {
                return { ...cartItem, count: cartItem.count + 1 }
            } else {
                return cartItem;
            }
        })  
    ),

    [decreaseAmont]: (state, action) => (
        state.map(cartItem => {
            if (cartItem.movie.imdbid === action.payload.imdbid) {
                return { ...cartItem, count: cartItem.count - 1 }
            } else {
                return cartItem;
            }
        })  
    ),

    [removeFromCart]: (state, action) => (
       state.filter(cartItem => cartItem.movie.imdbid !== action.payload.imdbid)
    )

})
export { actionsshopcart, reducershopcart};