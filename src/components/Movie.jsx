import './movie.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, STATUS } from "../features/movie";
import { actionsh } from "../features/highlightmovie";
import { actionssetCurrentScreen } from "../features/currentscreen";
import { actionsshopcart } from '../features/shoppingcart';
import Fade from "react-reveal/Fade";
import Search from './Search';
import MovieCard from './MovieCard';

import HighlightedMovie from './HighlightedMovie';


<link rel="stylesheet" href="node_modules/react-star-rating/dist/css/react-star-rating.min.css"></link>


const Movie = () => {

    const status = useSelector(state => state.movie.status);

    const movies = useSelector(state => state.movie.movies);

     

   

    
    const [openlightboxsection, setOpenlightboxsection] = useState(null)

    const [content, setContent] = useState(null)


    const dispatch = useDispatch();
    
    const buy = (film) => {dispatch(actionsshopcart.addToCart(film))};

    useEffect(() => {


        if (status === STATUS.NORMAL) {
            setContent('Redo för några Movies!');
            fetchMovies(dispatch);
        } else if (status === STATUS.FETCHING) {
            setContent('Väntar på Movies...');

        } else if (status === STATUS.SUCCESS) {
            console.log('the movie length: ', movies.length)
            console.log('the movies: ', movies)

            setContent(movies.map(movie =>
                <div>
                    <MovieCard movie={movie} />
                    <div className='moviecardbuttons'>
                        <button className='moreinfobutton' onClick={() => {
                            //setShowmoreinfoforthismovie(movie)
                            fetchSpecificMovie(movie.imdbID);
                        }}>More Info</button>
                        <button className = 'buybutton' onClick={()=>
                        
                        { console.log('test info')
                            buy(movie) }}>Buy</button>
                    </div>
                </div>
            ))
        } else {
            setContent("Kunde inte hämta Movies");

        }
    }, [movies]);



   

    async function fetchSpecificMovie(imdbID) {
        //setContent(<HighlightedMovie imdbID={imdbID}/>)
        dispatch(actionsh.isFetching());
        const url = 'http://www.omdbapi.com/?apikey=72d7fe9&i=' + imdbID
        try {
            let response = await fetch(url);
            let json = await response.json();
            console.log('Got data: ', json);
            let movie = json;
            dispatch(actionsh.success(movie))
            //openLightbox(movie);
            console.log('open this movie : ', movie);
            //setContent(<HighlightedMovie imdbID={imdbID}/>)
            
            setOpenlightboxsection(<HighlightedMovie/>)
            
        } catch {
            dispatch(actionsh.failure());
        }
    }

    return (
        <>
            <div className='moviePageTitle'>
                <Fade left cascade>
                <p>Our Exciting Movies</p>
                </Fade>
            </div>
            <Search placeholder="SearchMovies" ></Search>
            <Fade bottom>
                <div>
            {openlightboxsection}
            
            <div className='four-columns'>
                
                {content}
            </div>
            </div>
            </Fade>
            {/*<button className = 'loadMore' onClick={fetchOnePageMore}>LoadMore</button>*/}
        </>
    )

    async function fetchMovies() {
        dispatch(actions.isFetching());
        const url = 'http://www.omdbapi.com/?apikey=72d7fe9&s=taken&page=1'
        try {
            let response = await fetch(url);
            let json = await response.json();
            console.log('Got data: ', json);
            let movies = json.Search;
            movies.map(movie => {
                if(movie.Poster !== 'N/A'){
                    dispatch(actions.success(movie))
                }
                
            })
            //dispatch(actions.success(movies))
            //let numberofpages = (Math.floor(parseInt(json.totalResults) / 10)) + 1
            /*let numberofpages = (Math.floor(parseInt(json.totalResults) / 10)) + 1*/
            for (var i = 2; i < 6; i++) {
                fetchMoreMovies(i)
            }
            dispatch(actionssetCurrentScreen.setCurrentScreen('movie'))
            console.log('the moviessss : ', movies)
        } catch {
            dispatch(actions.failure());

        }
    }

    async function fetchMoreMovies(i) {
        dispatch(actions.isFetching());
        const url = 'http://www.omdbapi.com/?apikey=72d7fe9&s=taken&page=' + i
        try {
            let response = await fetch(url);
            let json = await response.json();
            console.log('Got data: ', json);
            let movies = json.Search;
            movies.map(movie => {
                if(movie.Poster !== 'N/A'){
                dispatch(actions.success(movie))
                }
            })
            //dispatch(actions.success(movies))
        } catch {
            dispatch(actions.failure());
        }
    }

    /*async function fetchOnePageMore() {
        setPage(page+1)
        if(page<5){
            dispatch(actions.isFetching());
            const url = 'http://www.omdbapi.com/?apikey=72d7fe9&s=taken&page=' + page
            try {
                let response = await fetch(url);
                let json = await response.json();
                console.log('Got data: ', json);
                let movies = json.Search;
                movies.map(movie=>{
                    dispatch(actions.success(movie))
                })
                dispatch(actionssetCurrentScreen.setCurrentScreen('movie'))
            } catch {
                dispatch(actions.failure());
            }
        }

    }*/

}

export default Movie;