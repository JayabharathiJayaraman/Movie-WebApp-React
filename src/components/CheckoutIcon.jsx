import './CheckoutIcon.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShopCartItem from './ShopCartItem.css'



const CheckoutIcon = () => {
    const dispatch =useDispatch();
    const shopCart = useSelector(state => state.shopc);
    console.log('length', shopCart.length)
    const content = shopCart.map(item => {
        try{
            return(<div>
                <ShopCartItem count={item.count} title={item.movie.Title}
                    img= {item.movie.Poster} imdb={item.movie.imdbID}
                />
            </div>)
        }catch{
            return []
        }   
    }
    
    )

    //const totalPrice = 
    return(
        <div className='mainPage'>
        {content}
            
        </div>
    )
}

export default CheckoutIcon