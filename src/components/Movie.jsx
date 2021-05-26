import './movie.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, STATUS } from "../features/movie";
import { actionsh, STATUSh } from "../features/highlightmovie";
import { actionssetCurrentScreen } from "../features/currentscreen";

import Search from './Search';

import InfiniteScroll from 'react-infinite-scroll-component';
import HighlightedMovie from './HighlightedMovie';


const Movie = () => {
    
    const status = useSelector(state => state.movie.status);
    const fact = useSelector(state => state.movie.fact);
    const movies = useSelector(state => state.movie.movies);
    const selectedmovie = useSelector(state => state.highlightmovie.selectedmovie);
    const [page, setPage] = useState(1)

    const [content, setContent] = useState(null)
    
    const [selectedmoviee, setSelectedmovie] = useState(null)

    
    //const MOVIE = 'movie', HIGHLIGHTEDMOVIE = 'highlightedmovie';
 
  //const [currentScreen, setCurrentScreen] = useState(statuscurrentscreen);

    const [selectedmovieid, setSelectedmovieid]=useState(null)
    

    const dispatch = useDispatch();
    
    const statuscurrentscreen = useSelector(state => state.currentscrn.currentscreen);
    //const [content, setcontent] = useState(STATUS.NORMAL);
    //let content = null;
    useEffect(() => {
    switch(statuscurrentscreen) {
        case 'movie':
            if (status === STATUS.NORMAL) {
                setContent('Redo för några Movies!');
            } else if (status === STATUS.FETCHING) {
                setContent('Väntar på Movies...');
                
            } else if (status === STATUS.SUCCESS) {
                //console.log('the movie length: ', movies.length)
                //console.log('the movies : ', movies)
                /*if(!movies.length){
                    console.log('you dont have movies: ')
                    fetchMovies(dispatch);
                }*/
                //setContent(movies.map(moviearray =>
                    //moviearray.map(movie =>
                    setContent(movies.map(movie =>
                    <div>
                    
                        {/*<img className='poster' src={movie.Poster} onClick={() => openLightbox(movie)} alt='abc'></img>*/}
                        <img className='poster' src={movie.Poster} onClick={() => {
                            
                            setSelectedmovieid(movie.imdbID)
                            
                            console.log('movie imdbID: ', movie.imdbID);
                            console.log('statuscurrentscreen',statuscurrentscreen);
                           
                            dispatch(actionssetCurrentScreen.setCurrentScreen('highlightedmovie'))
                            console.log('statuscurrentscreen',statuscurrentscreen);
                            }
                            } alt='abc'></img>
                        <p className='moive__des'>Title:{movie.Title}</p>
                    </div>
                    )
                )
            } else {
                setContent("Kunde inte hämta Movies");
                
            }
            break;
        case 'highlightedmovie':
            setContent(<HighlightedMovie imdbID={selectedmovieid}/>)
            break;
        default:
            setContent("this is the default");
    }
    
    
}, [statuscurrentscreen, movies]);
    

   

    useEffect(() => {

       
        fetchMovies(dispatch);
    }, []);
 

    return (
        <>
            <div className='moviePageTitle'>
                <p>Our Exciting Movies</p>
            </div>
            <Search placeholder="SearchMovies" ></Search>
            <section id="overlay"> 
                  <figure>
                     <img src="" alt=""/>
                     <figcaption></figcaption>
                  </figure>
            </section>
            <div className='four-columns'>
                {/*{selectedmoviee}*/}
                {content}
                
            </div>
            <button className = 'loadMore' onClick={fetchOnePageMore}>LoadMore</button>
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
            movies.map(movie=>{
                dispatch(actions.success(movie))
            })
            //dispatch(actions.success(movies))
            /*let numberofpages = (Math.floor(parseInt(json.totalResults) / 10)) + 1
            for (var i = 2; i < numberofpages; i++) {
                fetchMoreMovies(i)
            }*/
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
            movies.map(movie=>{
                dispatch(actions.success(movie))
            })
            //dispatch(actions.success(movies))
        } catch {
            dispatch(actions.failure());
        }
    }

    async function fetchOnePageMore() {
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
        
    }
    


}

export default Movie;