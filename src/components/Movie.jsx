import './movie.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, STATUS } from "../features/movie";
import { actionsh, STATUSh } from "../features/highlightmovie";
import Search from './Search';
import InfiniteScroll from 'react-infinite-scroll-component';
import HighlightedMovie from './components/HighlightedMovie';

const Movie = () => {
    const status = useSelector(state => state.movie.status);
    const fact = useSelector(state => state.movie.fact);
    const movies = useSelector(state => state.movie.movies);
    const selectedmovie = useSelector(state => state.highlightmovie.selectedmovie);
    const [page, setPage] = useState(1)
    const [showpopup, setShowpopup] = useState(false)

    const statush = useSelector(state => state.highlightmovie.statush);
    console.log('statush: ', statush);
    const dispatch = useDispatch();
    const dispatchh = useDispatch();
    let content = null;
    if (status === STATUS.NORMAL) {
        content = 'Redo för lite fakta!';
    } else if (status === STATUS.FETCHING) {
        content = 'Väntar på fakta...';
    } else if (status === STATUS.SUCCESS) {
        content = movies.map(movie =>
            <div>
                <img className='poster' src={movie.Poster} onClick={() => {
                    openLightbox(movie)
                    HighlightedMovie()
                }
                } alt='abc'></img>
                <p className='moive__des'>Title:{movie.Title}</p>
            </div>
        );
    } else {
        content = "Kunde inte hämta fakta";
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
        if (page <= 5) {
            fetchFact(dispatch);
            setPage(page + 1);
            console.log('Page: ', page);
        }
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

    async function fetchSpecificMovie(movie) {
        dispatchh(actionsh.isFetching());
        const url = 'http://www.omdbapi.com/?apikey=72d7fe9&i='  + movie.imdbID
        try {
            let response = await fetch(url);
            let json = await response.json();
            console.log('Got data: ', json);
            let movie = json;
            dispatchh(actionsh.success(movie))
            setShowpopup(true)
        } catch {
            dispatchh(actionsh.failure());
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