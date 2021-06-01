import './ShopCartItem.css'
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { actionsshopcart } from "../features/shoppingcart";
const ShopCartItem = (props) => {
    const dispatch =useDispatch();
    const shopCart = useSelector(state => state.shopc);

    const add =()=>{      
        console.log('shopcart', shopCart)
        const movieId ={imdbid: props.imdb}
        console.log('movieId', movieId)
        dispatch(actionsshopcart.increaseAmountShopCart(movieId))
    }

    const remove = ()=>{
        console.log('shopcart', shopCart)
        const movieId ={imdbid: props.imdb}
        console.log('movieId', movieId)
        if(props.count > 1){
            dispatch(actionsshopcart.decreaseAmont(movieId))
        }else{
            dispatch(actionsshopcart.removeFromCart(movieId))
        }
        
    }
    return(

        <div className='cartItem'>
            {console.log('props', props)}
            <div className='imageButtonsCartItem'>
                <img className='posterCartItem' 
                    src={props.img}//'https://m.media-amazon.com/images/M/MV5BNmRjM2MyOTYtZDM2NC00YzA5LWFjZDEtNWQxM2YzODEyMzk3XkEyXkFqcGdeQXVyNjQ5MjQxNjY@._V1_SX300.jpg'
                    alt='poster'
                ></img>
               
                
            </div>
            <div className='infoCartItem'>
                <div className='cartItemButtons'>
                    <button className='cartItemButton' onClick={add}>Increase</button>
                    <button className='cartItemButton' onClick={remove}>{((props.count< 2)?'Remove':'Decres')}</button>
                </div>           
                <div className='cartItemCount'>Count: {props.count}</div> 
                <div className='cartItemPrice'>Pris: {49.99 * props.count} kr!</div> 
                <div className='cartItemTitle'>{props.title}</div>
            </div>
            
        </div>
    )
}



export default ShopCartItem;