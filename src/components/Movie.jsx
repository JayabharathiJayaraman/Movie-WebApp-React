import './movie.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, STATUS } from "../features/movie";
import { actionsh, STATUSh } from "../features/highlightmovie";

import Search from './Search';
import InfiniteScroll from 'react-infinite-scroll-component';
import HighlightedMovie from './HighlightedMovie';

const Movie = () => {
    const status = useSelector(state => state.movie.status);
    const fact = useSelector(state => state.movie.fact);
    const movies = useSelector(state => state.movie.movies);
    const selectedmovie = useSelector(state => state.highlightmovie.selectedmovie);
    const [page, setPage] = useState(1)
    
    const [selectedmoviee, setSelectedmovie] = useState(null)


    const MOVIE = 'movie', HIGHLIGHTEDMOVIE = 'highlightedmovie';
 
  const [currentScreen, setCurrentScreen] = useState(MOVIE);

    const [selectedmovieid, setSelectedmovieid]=useState(null)
    
    const dispatch = useDispatch();
    
    //const [content, setcontent] = useState(STATUS.NORMAL);
    let content = null;
    switch(currentScreen) {
        case MOVIE:
            if (status === STATUS.NORMAL) {
                content = 'Redo för lite fakta!';
            } else if (status === STATUS.FETCHING) {
                content = 'Väntar på fakta...';
                
            } else if (status === STATUS.SUCCESS) {
                
                content=movies.map(movie =>
                    <div>
                        {/*<img className='poster' src={movie.Poster} onClick={() => openLightbox(movie)} alt='abc'></img>*/}
                        <img className='poster' src={movie.Poster} onClick={() => {
                            {/*content=<HighlightedMovie imdbID={movie.imdbID}/>
                            setSelectedmovie(
                                <HighlightedMovie imdbID={movie.imdbID}/>
                            )*/}
                            setSelectedmovieid(movie.imdbID)
                            
                            console.log('movie imdbID: ', movie.imdbID);
                            {/*setCurrentScreen(HIGHLIGHTEDMOVIE)*/}
                            //setCurrentScreen('hhhh')
                            //fetchSpecificMovie(movie.imdbID)
                            //openLightbox(movie)
                            setCurrentScreen(HIGHLIGHTEDMOVIE)
                            
                            }
                            } alt='abc'></img>
                        <p className='moive__des'>Title:{movie.Title}</p>
                    </div>
                );
            } else {
                content = "Kunde inte hämta fakta";
                
            }
            break;
            case HIGHLIGHTEDMOVIE:
                content = <HighlightedMovie imdbID={selectedmovieid}/>
                break;
            default:
                content = "this is the default";
    }
    

    

    /*if (statush === STATUSh.SUCCESS && showpopup===true) {
        content = 
            <div>
                <img className='poster' src={selectedmovie.Poster} alt={selectedmovie.Title}></img>
                <p className='moive__des'>Title:{selectedmovie.Title}</p>
                <p className='moive__des'>Year:{selectedmovie.Year}</p>
                <p className='moive__des'>Runtime:{selectedmovie.Runtime}</p>
                <p className='moive__des'>Actors:{selectedmovie.Actors}</p>
                <p className='moive__des'>Country:{selectedmovie.Country}</p>
                <p className='moive__des'>Awards:{selectedmovie.Awards}</p>
                <p className='moive__des'>Type:{selectedmovie.Type}</p>
            </div>



        
    }*/

    useEffect(() => {
        /*if (page <= 5) {
            fetchFact(dispatch);
            setPage(page + 1);
            console.log('Page: ', page);
        }*/
        fetchFact(dispatch);
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
        </>
    )



    


    async function fetchFact() {
        dispatch(actions.isFetching());
        const url = 'http://www.omdbapi.com/?apikey=72d7fe9&s=taken&page=1'
        try {
            let response = await fetch(url);
            let json = await response.json();
            console.log('Got data: ', json);
            let movies = json.Search;
            dispatch(actions.success(movies))
        } catch {
            dispatch(actions.failure());
        }
    }
    async function fetchSpecificMovie(movieid) {
        console.log('fetchSpecificMovie selectedmovieid: ', movieid);
        dispatch(actions.isFetching());
        const url = 'http://www.omdbapi.com/?apikey=72d7fe9&i='  + movieid
        try {
            let response = await fetch(url);
            let json = await response.json();
            console.log('Got data: ', json);
            let movie = json;
            dispatch(actionsh.success(movie))
            
            //setcontent(<HighlightedMovie/>)
        } catch {
            dispatch(actionsh.failure());
        }
    }




    function openLightbox(movie) {
        //fetchSpecificMovie(movie)
       
        /*setCurrentmovieTitle(movie.Title)
        console.log('current movie title comes to function: ', movie.Title);
        console.log('current movie title: ', currentmovietitle);
        fetchSpecificMovie(dispatch)
        for (var i=0; i < 100; i++) {
            console.log('current status: '+ i.toString(), status);
        } */
        
        //if (status === STATUS.VERIFYING) {
            
    
            let el = document.querySelector('#overlay img');
            el.setAttribute('src', movie.Poster);
            el.setAttribute('alt', movie.Title);
        
            document.querySelector('#overlay figcaption').innerHTML = movie.Title +' Year: '+ movie.Year;
        
            document.querySelector('#overlay').classList.toggle('show');
        
        
        
            var elm = document.querySelector('#overlay');
            if(elm){
              elm.addEventListener('click', () => {
                document.querySelector('#overlay').classList.toggle('show');
            
            });
            }
    
    
    
        //} 
    
    
    
        
        
    
    
    
    }



}








export default Movie;