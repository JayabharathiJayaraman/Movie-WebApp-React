import './movie.css';

import { useDispatch, useSelector } from "react-redux";

import { actionsshopcart } from '../features/shoppingcart';
const MovieCard = (props) => {

    
    const dispatch = useDispatch();
    const selectedmovie = useSelector(state => state.highlightmovie.selectedmovie);
    const buy = () => {dispatch(actionsshopcart.addToCart(selectedmovie))};

    


    return (
        <div>





            
            <img className='poster' src={props.movie.Poster}  alt='abc'></img>
            <div className='moviecardbuttons'>
            <button className = 'buybutton' onClick={()=>{
                buy()
                
            }
                }>Buy</button>
                </div>
          
        </div>
        
        
    )



    




};

export default MovieCard;