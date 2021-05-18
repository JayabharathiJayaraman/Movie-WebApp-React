import React from "react";
import MovieImg from "./MovieImg";
import { useDispatch, useSelector } from "react-redux"
function MovieHistory() {
    const moviesHist = [
        'https://m.media-amazon.com/images/M/MV5BMTg2MTMyMzU0M15BMl5BanBnXkFtZTgwOTU3ODk4NTE@._V1_SX300.jpg',
        "https://m.media-amazon.com/images/M/MV5BNTVkYTZlZWItZTc0ZS00MTIzLThlNjItNmNkNDA5YzIwZGZjXkEyXkFqcGdeQXVyODQzNTE3ODc@._V1_SX300.jpg",
        "https://m.media-amazon.com/images/M/MV5BMWIxMzQxZjAtMGFkNC00NzYwLWFiMGEtNzZhZjE5MmFiMmMyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "https://m.media-amazon.com/images/M/MV5BODBmOWU2YWMtZGUzZi00YzRhLWJjNDAtYTUwNWVkNDcyZmU5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
    ]
    const movieList = useSelector(state => state.movie.movie)
    return <div className='movieHist'>
               {/* {moviesHist.map( info => <MovieImg  
      img= {info} 
      
        />)} */}
        {movieList.slice(0,4).map( info => <MovieImg  
      img= {info.Poster} 
      
        />)}   
        
    </div>
}
export default MovieHistory;


