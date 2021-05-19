import React from "react";
import MovieImg from "./MovieImg";
import { useDispatch, useSelector } from "react-redux"
function MovieHistory() {
 
    const movieList = useSelector(state => state.movie.movie)
    return <div className='movieHist'>
      
        {movieList.slice(0,4).map( info => <MovieImg  
      img= {info.Poster} 
      
        />)}   
        
    </div>
}
export default MovieHistory;


