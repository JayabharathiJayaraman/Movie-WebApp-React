// import { createAction, createReducer } from "@reduxjs/toolkit";

// const isFetching = createAction('is fetching')
// const success = createAction('success')
// const failure = createAction('failure')

// const actions = {isFetching, success, failure}

// const STATUS = {
//     NORMAL: 'normal',
//     FETCHING: 'is fetching',
//     SUCCESS: 'success',
//     FAILURE: 'failure'
// }
// const startList = [
//     'https://m.media-amazon.com/images/M/MV5BMTg2MTMyMzU0M15BMl5BanBnXkFtZTgwOTU3ODk4NTE@._V1_SX300.jpg',
//     "https://m.media-amazon.com/images/M/MV5BNTVkYTZlZWItZTc0ZS00MTIzLThlNjItNmNkNDA5YzIwZGZjXkEyXkFqcGdeQXVyODQzNTE3ODc@._V1_SX300.jpg",
//     "https://m.media-amazon.com/images/M/MV5BMWIxMzQxZjAtMGFkNC00NzYwLWFiMGEtNzZhZjE5MmFiMmMyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
//     "https://m.media-amazon.com/images/M/MV5BODBmOWU2YWMtZGUzZi00YzRhLWJjNDAtYTUwNWVkNDcyZmU5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
// ]



// const reducer = createReducer(initialState, {
//     [isFetching]: (state, action) => ({
//         ...state,
//         status: STATUS.FETCHING
//     }),
//     [success]: (state, action) => ({
//         status: STATUS.SUCCESS,
//         img: action.payload,
//         title: action.payload
//     }),
//     [failure]: (state, action) => ({
//         ...state,
//         status: STATUS.FAILURE
//     })

// })

// export { actions, reducer, STATUS}