import './checkoutIcon.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShopCartItem from './ShopCartItem'



const CheckoutIcon = () => {
    const dispatch =useDispatch();
    const shopCart = useSelector(state => state.shopc);
    const content = shopCart.map(item => <div>
        
        <ShopCartItem count={item.count} title={item.movie.Title}
            img= {item.movie.Poster}//'https://m.media-amazon.com/images/M/MV5BNmRjM2MyOTYtZDM2NC00YzA5LWFjZDEtNWQxM2YzODEyMzk3XkEyXkFqcGdeQXVyNjQ5MjQxNjY@._V1_SX300.jpg' 
        />
    </div>)
    return(
        <div className='mainPage'>
        {content}
            
        </div>
    )
}

export default CheckoutIcon