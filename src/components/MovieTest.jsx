import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { actions, STATUS } from "../feutures/movietest"
import { actions_search, STATUS_SEARCH } from "../feutures/search"
import MovieImg from "./MovieImg";

const MovieTest = () => {
    const status = useSelector(state => state.movie.status)
    const movieList = useSelector(state => state.movie.movie)
    const search_status = useSelector(state => state.search.status)
    const searchList = useSelector(state => state.search.search)
    const [searchMovie, setSearchMovie] = useState('minions')
    console.log('movieList', movieList)
    const dispatch = useDispatch()
    let content = null
    let blatext = 'blaText2'
    if (status === STATUS.NORMAL) {
        content = movieList[0] //[0][0].Poster
        blatext = 'normal'
    } else if ( status === STATUS.FETCHING) {
        content = 'Väntar på fakta...'
        blatext = 'fetching'
    } else if ( status === STATUS.SUCCESS) {
        content = movieList[0] //[0][0].Poster
        blatext = movieList[0][0].Title
    } else { 
        content = movieList[0]   //[0][0].Poster
        blatext = 'blaText3'
    }
 

    const handleChange = event => setSearchMovie(event.target.value);
    return (
        <div>
        <h2>{blatext}</h2>
            <p>
                <input type="text" value={searchMovie} onChange={handleChange}></input>
                <button onClick={() => 
                fetchMovie(dispatch, searchMovie)}>Get movie!</button>                
            </p>
            {movieList[0].map(info => <MovieImg  
      img= {info.Poster}  alt='movie'/>)}
            {/* <img src={content} alt='movie'/> */}
        </div>
    )
}

async function fetchRestOfMovies(dispatch, movie, page){
    console.log('fetching page', page)
    const url = 'http://omdbapi.com/?apikey=72d7fe9&s=' + movie + '&page=' + page
    try {
        let response = await fetch(url)
        let json = await response.json()
        console.log('in try')
        if(json.Response !== "False"){
            console.log('in success')
            dispatch(actions_search.success_search(json.Search))
            console.log('searchList', json.Search)
        }
    }catch {
        dispatch(actions_search.failure_search())
    }
    
} 

async function fetchMovie(dispatch, movie) {
    dispatch(actions.isFetching())
    //const movies = ['smallfoot', 'minions', 'coco', 'soul', 'Ralph Breaks the Internet']
console.log('???', movie)
 
   
    const url = 'http://omdbapi.com/?apikey=72d7fe9&s=' + movie
   
    try {
        let response = await fetch(url)
        let json = await response.json()
        console.log('Got data: ', json.Search )
        console.log('search results: ', parseInt(json.totalResults) )
        //let img = json.Poster
        //let title = json.Title
        if(json.Response !== "False"){
            console.log('log fetch 1 success')
            console.log('total', json.totalResults)
            const pages = (Math.floor(parseInt(json.totalResults) / 10)) + 1
            console.log('pages to fetch', pages)
            dispatch(actions.success(json.Search))
            dispatch(actions_search.new_search(json.Search))
            console.log('pages to fetch', pages)
            for (let index = 2; index < pages + 1; index++){
                console.log('for loop', index)
                fetchRestOfMovies(dispatch, movie, index)
               
            }
        
        }
        
    } catch {
        dispatch(actions.failure())
    }
}
export default MovieTest;