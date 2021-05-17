import './movie.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, STATUS } from "../features/movie";
import Search from './Search';
import InfiniteScroll from 'react-infinite-scroll-component';

const Movie = () => {
    const status = useSelector(state => state.movie.status);
    const fact = useSelector(state => state.movie.fact);
    const [movies, setMovies] = useState([])
    const [searchMovies, setSearchMovies] = useState([])
    const [page, setPage] = useState(1)

    const dispatch = useDispatch();
    let content = null;
    if (status === STATUS.NORMAL) {
        content = 'Redo för lite fakta!';
    } else if (status === STATUS.FETCHING) {
        content = 'Väntar på fakta...';
    } else if (status === STATUS.SUCCESS) {
        content = fact;
    } else {
        content = "Kunde inte hämta fakta";
    }
    async function fetchFact(dispatch) {
        dispatch(actions.isFetching());
        const url = 'http://www.omdbapi.com/?apikey=72d7fe9&s=taken&page=1';
        try {
            let response = await fetch(url);
            //console.log('Got response: ', response);
            let json = await response.json();
           // console.log('Got data: ', json);
            setMovies(json.Search);
            console.log('Page: ', setPage);
            let fact = json.text;
            dispatch(actions.success(fact));
        } catch {
            dispatch(actions.failure());
        }
        
      
}
    useEffect(() => {
        fetchFact(dispatch);
    }, [dispatch])

    return (
        <>
            <div>
                {content}
            </div>      
            <div >  
                <div className='moviePageTitle'>
                    <p>Our Exciting Movies</p>
                </div>
                <Search placeholder="SearchMovies" ></Search>
                <InfiniteScroll dataLength = {movies.length}
                next = {fetchFact(dispatch)}
                hasMore = {true}> 
                <div className = 'movie'>
                    {movies.map((movie) => (
                        <div key={movie.imdbID} className='movies'>
                            <p className='moive__des'>
                                Title: {movie.Title}
                            </p>    
                                <img src={movie.Poster} className ='poster'></img>
                            
                        </div>
                    ))}
                </div>
                </InfiniteScroll>
            </div>
            
        </>
    )

}



export default Movie;