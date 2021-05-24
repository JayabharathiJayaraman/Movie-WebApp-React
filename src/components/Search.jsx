import React from 'react';
import './search.css'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, STATUS } from "../features/movie";

const APIKEY='72d7fe9'

const Search = ({ placeholder}) => {
    const movies = useSelector(state => state.movie.movies);
    const dispatch = useDispatch()
    const handleChange = event => setSearchMovie(event.target.value);
    const [searchMovie, setSearchMovie] = useState('')
    return (
        <>
        <div className='ui search'>
            <div className='box'>
                <i class="fas fa-search"></i>
                <input type='search'
                    className='search'
                    placeholder={placeholder}
                    onChange={handleChange}
                />
                <button onClick={() => 
                fetchMovies(dispatch, searchMovie)}>test</button>
            </div>
        </div>
        </>
    );
}
 
async function fetchMovies(dispatch, searchWord) {
    dispatch(actions.isFetching());
    console.log('Got search word: ', searchWord);
    const url = 'http://www.omdbapi.com/?apikey=' +
     APIKEY +'&s=' + searchWord
    try {
        let response = await fetch(url);
        let json = await response.json();
        console.log('Got data: ', json);
        const pages = (Math.floor(parseInt(json.totalResults) / 10)) + 1
        let movies = json.Search;
        dispatch(actions.clearMovies())
        movies.map(movie=>{
            dispatch(actions.success(movie))
        })
  //      dispatch(actionssetCurrentScreen.setCurrentScreen('movie'))
        console.log('the moviessss : ', movies)
        for (let index = 2; index < pages + 1; index++){
            console.log('for loop', index)
            fetchRestOfMovies(dispatch, searchWord, index)
           
        }
    } catch {
        dispatch(actions.failure());

    }
}

async function fetchRestOfMovies(dispatch, searchWord, page){
    console.log('fetching page', page)
    const url = 'http://omdbapi.com/?apikey=' +
     APIKEY + '&s=' + searchWord + '&page=' + page
    try {
        let response = await fetch(url)
        let json = await response.json()
        let movies = json.Search;
        movies.map(movie=>{
            dispatch(actions.success(movie))
        })
  
  //      console.log('the moviessss : ', movies)
    } catch {
        dispatch(actions.failure());

    }
    
}

export default Search;