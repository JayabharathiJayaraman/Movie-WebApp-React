import './shopCartItem.css'
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { actionsshopcart } from "../features/shoppingcart";
const ShopCartItem = (props) => {
    const dispatch =useDispatch();
    const shopCart = useSelector(state => state.shopc);

    const add =()=>{
        dispatch(actionsshopcart.increaseAmount())
    }
    return(

        <div className='cartItem'>
        
            <div>{props.title}</div> 
            <div>{props.count}</div> 
            <img className='poster' 
            src={props.img}//'https://m.media-amazon.com/images/M/MV5BNmRjM2MyOTYtZDM2NC00YzA5LWFjZDEtNWQxM2YzODEyMzk3XkEyXkFqcGdeQXVyNjQ5MjQxNjY@._V1_SX300.jpg'
            alt='poster'
             ></img>
            <button className='addButton' onClick={add}>Add</button>
            <button className='decresButton'>Decres</button>
        </div>
    )
}



export default ShopCartItem;