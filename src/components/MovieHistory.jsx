import React from "react";
import MovieImg from "./MovieImg";
import { useDispatch, useSelector } from "react-redux"
function MovieHistory() {
 
    const movieList = useSelector(state => state.movie.movie)
    return <div className='movieHist'>
      
        {movieList.slice(0,4).map( info => <MovieImg  
      img= {info[0].Poster} alt='movie'
      
        />)}   
        
    </div>
}
export default MovieHistory;


