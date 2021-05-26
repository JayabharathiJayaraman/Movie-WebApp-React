import './movie.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionsshopcart } from '../features/shoppingcart';
import { actionsh, STATUSh } from "../features/highlightmovie";
import './HighlightedMovie.css'
import { actionssetCurrentScreen } from "../features/currentscreen";




const HighlightedMovie = (props) => {
    const statuscurrentscreen = useSelector(state => state.currentscrn.currentscreen);
    const dispatch =useDispatch();
    const selectedmovie = useSelector(state => state.highlightmovie.selectedmovie);
    const buy = () => {dispatch(actionsshopcart.addToCart(selectedmovie))};
    const gohome = () =>{
        dispatch(actionssetCurrentScreen.setCurrentScreen('movie'))
//        console.log('statuscurrentscreen',statuscurrentscreen);
    }

    const statush = useSelector(state => state.highlightmovie.statush);
    console.log('statush: ', statush);
    const dispatchh = useDispatch();
    
    let content = null;
    let movietitle=''
    if (statush === STATUSh.NORMAL) {
        content = 'Redo för lite fakta!';
    } else if (statush === STATUSh.FETCHING) {
        content = 'Väntar på fakta...';
    } else if (statush === STATUSh.SUCCESS) {
        
        content = 
        <div className='movieinfo'>
            <div className='movieinfoimg'>
            <img className='HighlightedMovieposter' src={selectedmovie.Poster} alt={selectedmovie.Title}></img>
            </div>
            <div className='movieinfomoreinfo'>
            <p className='moive__des'>Title:{selectedmovie.Title}</p>
            <p className='moive__des'>Year:{selectedmovie.Year}</p>
            <p className='moive__des'>Runtime:{selectedmovie.Runtime}</p>
            <p className='moive__des'>Actors:{selectedmovie.Actors}</p>
            <p className='moive__des'>Country:{selectedmovie.Country}</p>
            <p className='moive__des'>Awards:{selectedmovie.Awards}</p>
            <p className='moive__des'>Type:{selectedmovie.Type}</p>
            
            <button onClick={()=>{
                buy()
                gohome()
                
            }
                }>Add to shopcart</button>
            </div>
        </div>
        movietitle=selectedmovie.Title
    } else {
        content = "Kunde inte hämta fakta";
    }

    useEffect(() => {
        fetchSpecificMovie(props.imdbID)
    }, []);



    async function fetchSpecificMovie(imdbID) {
        dispatchh(actionsh.isFetching());
        const url = 'http://www.omdbapi.com/?apikey=72d7fe9&i='  + imdbID
        try {
            let response = await fetch(url);
            let json = await response.json();
            console.log('Got data: ', json);
            let movie = json;
            dispatchh(actionsh.success(movie))
            
            //setcontent(<HighlightedMovie/>)
        } catch {
            dispatchh(actionsh.failure());
        }
    }

    

    

   
    return (
        <>
            <div className='moviePageTitle'>
                <p>{movietitle}</p>
            </div>
            
            
            <div className='four-columns'>
                {content}
            </div>
        </>
    )



    


    

   





    



}








export default HighlightedMovie;