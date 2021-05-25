import './movie.css';

import { useDispatch, useSelector } from "react-redux";


const MovieCard = (props) => {

    
    const dispatch = useDispatch();

    


    


    return (
        <div>





            
            <img className='poster' src={props.movie.Poster}  alt='abc'></img>
            
          
        </div>
        
        
    )



    




};

export default MovieCard;