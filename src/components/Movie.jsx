import './movie.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, STATUS } from "../features/movie";
import { actionsh} from "../features/highlightmovie";
import { actionssetCurrentScreen } from "../features/currentscreen";

import Search from './Search';



import MovieCard from './MovieCard'


const Movie = () => {
    
    const status = useSelector(state => state.movie.status);
    
    const movies = useSelector(state => state.movie.movies);
    
    const [page, setPage] = useState(1)
    

    const [content, setContent] = useState(null)
    
  
    const dispatch = useDispatch();
    
    
    useEffect(() => {
    
        
            if (status === STATUS.NORMAL) {
                setContent('Redo för några Movies!');
            } else if (status === STATUS.FETCHING) {
                setContent('Väntar på Movies...');
                
            } else if (status === STATUS.SUCCESS) {
                console.log('the movie length: ', movies.length)
                console.log('the movies : ', movies)
                    
                setContent(movies.map(movie =>
                <div>
                <MovieCard movie={movie}/>
                <div className='moviecardbuttons'>
                <button className = 'moreinfobutton' onClick={()=>{
                    //setShowmoreinfoforthismovie(movie)
                    fetchSpecificMovie(movie.imdbID);
                    
                   
                }}>More Info</button>
                </div>
                </div>
                ))
            } else {
                setContent("Kunde inte hämta Movies");
                
            }
            
    
    
    
}, [movies]);
 


function openLightbox(movie) {
            
    
    let el = document.querySelector('#overlay img');
    el.setAttribute('src', movie.Poster);
    el.setAttribute('alt', movie.Title);
    document.querySelector('#overlay figcaption').innerHTML = 'Title: ' + movie.Title + "<br>"+' Year: '+ movie.Year + "<br>" + ' Time: ' + movie.Runtime + "<br>"+ ' Language: ' + movie.Language + "<br>"+ ' Ratings: ' + movie.imdbRating;
    document.querySelector('#overlay').classList.toggle('show');
    var elm = document.querySelector('#overlay');
    if(elm){
      elm.addEventListener('click', () => {
        document.querySelector('#overlay').classList.remove('show');
    
    });
    }

}

async function fetchSpecificMovie(imdbID) {
dispatch(actionsh.isFetching());
const url = 'http://www.omdbapi.com/?apikey=72d7fe9&i='  + imdbID
try {
    let response = await fetch(url);
    let json = await response.json();
    console.log('Got data: ', json);
    let movie = json;
    dispatch(actionsh.success(movie))
    openLightbox(movie);
    console.log('open this movie : ', movie);
    //setcontent(<HighlightedMovie/>)
} catch {
    dispatch(actionsh.failure());
}
}
   

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