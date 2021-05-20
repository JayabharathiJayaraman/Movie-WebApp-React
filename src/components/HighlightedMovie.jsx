import './movie.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actionsh, STATUSh } from "../features/highlightmovie";



const HighlightedMovie = () => {
    
    
    const selectedmovie = useSelector(state => state.highlightmovie.selectedmovie);
    

    const statush = useSelector(state => state.highlightmovie.statush);
    console.log('statush: ', statush);
    
    
    let content = null;
    if (statush === STATUSh.NORMAL) {
        content = 'Redo för lite fakta!';
    } else if (statush === STATUSh.FETCHING) {
        content = 'Väntar på fakta...';
    } else if (statush === STATUSh.SUCCESS) {
        
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
        
    } else {
        content = "Kunde inte hämta fakta";
    }

    

    

   
    return (
        <>
            <div className='moviePageTitle'>
                <p>your Movie</p>
            </div>
            
            
            <div className='four-columns'>
                {content}
            </div>
        </>
    )



    


    

   





    



}








export default HighlightedMovie;