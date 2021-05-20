import './movie.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, STATUS } from "../features/movie";
import Search from './Search';
import InfiniteScroll from 'react-infinite-scroll-component';

const Movie = () => {
    const status = useSelector(state => state.movie.status);
    const fact = useSelector(state => state.movie.fact);
    const movies = useSelector(state => state.movie.movies);
    const [page, setPage] = useState(1)
    const dispatch = useDispatch();
    let content = null;
    if (status === STATUS.NORMAL) {
        content = 'Redo för lite fakta!';
    } else if (status === STATUS.FETCHING) {
        content = 'Väntar på fakta...';
    } else if (status === STATUS.SUCCESS) {
        content = movies.map(movie =>
            <div>
                <img className='poster' src={movie.Poster}></img>
                <p className='moive__des'>Title:{movie.Title}</p>
            </div>
        );
    } else {
        content = "Kunde inte hämta fakta";
    }
    async function fetchFact() {
        console.log("InfiniteScroll");
        if (page <= 5) {
            dispatch(actions.isFetching());
            const url = `http://www.omdbapi.com/?apikey=72d7fe9&s=taken&page=${page}`
            try {
                let response = await fetch(url);
                let json = await response.json();
                console.log('Got data: ', json);
                setPage(page+1);
                console.log('Page ', page);
                let movies = json.Search;
                dispatch(actions.success([...movies]))
            } catch {
                dispatch(actions.failure());
            }
        }
    }
    useEffect(() => {
        fetchFact();
    }, []);
   
    return (
        <>
            <div className='moviePageTitle'>
                <p>Our Exciting Movies</p>
            </div>
            <Search placeholder="SearchMovies" ></Search>
            <InfiniteScroll dataLength = {30}
            next = {fetchFact}
            hasMore = {true}
            >
            <div className='four-columns'>
                {content}
            </div>
            </InfiniteScroll>
            <button onClick={fetchFact}>ShowMore</button>
        </>
    )

    
}

export default Movie;