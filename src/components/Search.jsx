import React from 'react';
import './search.css'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, STATUS } from "../features/movie";
import Fade from "react-reveal/Fade";
const APIKEY='72d7fe9'

const Search = ({ placeholder}) => {
    const movies = useSelector(state => state.movie.movies);
    const dispatch = useDispatch()
    const handleChange = event => {
        console.log('event', event)
        if (event.code === "Enter"){
            event.preventDefault();
            fetchMovies(dispatch, searchMovie)
        }else{
            setSearchMovie(event.target.value);
        }
    }

    const [searchMovie, setSearchMovie] = useState('')
    return (
        <>
        <Fade right cascade>
        <div className='ui search'>
            <div className='box'>
                <i class="fas fa-search"></i>
                <input type='search'
                    className='search'
                    placeholder={placeholder}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={() => 
                fetchMovies(dispatch, searchMovie)}>Search</button>
            </div>
        </div>
        </Fade>
        </>
    );


    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            fetchMovies(dispatch, searchMovie)
        }
      }

}

function addPrice(film) {
    let price = {'Price' : 49}
    try {
        const YEAR = parseInt(film.Year)
        const CURRENTYEAR = new Date().getFullYear()
        if(YEAR > CURRENTYEAR - 2){
            price = {'Price' : 129}
        }else if(YEAR > CURRENTYEAR - 5){
            price = {'Price' : 99}
        }else{
            price = {'Price' : 49}
        }
    }catch{
        price = {'Price' : 49}
    }
    console.log('price', {...film, ...price})
    return {...film, ...price}
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
            if(movie.Poster !== "N/A"){
                const movieToDispatch = addPrice(movie)
                dispatch(actions.success(movieToDispatch))
            }
            //dispatch(actions.success(movie))
        })
  //      dispatch(actionssetCurrentScreen.setCurrentScreen('movie'))
        console.log('the moviessss : ', movies)
        const maxPages = Math.min(5, pages)
        for (let index = 2; index < maxPages + 1; index++){
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
            if(movie.Poster !== "N/A"){
                const movieToDispatch = addPrice(movie)
                dispatch(actions.success(movieToDispatch))
            }
            //dispatch(actions.success(movie))
        })
  
  //      console.log('the moviessss : ', movies)
    } catch {
        dispatch(actions.failure());

    }
    
}

export default Search;