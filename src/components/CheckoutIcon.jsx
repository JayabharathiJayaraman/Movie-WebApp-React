import './CheckoutIcon.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShopCartItem from './ShopCartItem'



const CheckoutIcon = () => {

    let initialshoppingcartitemcount=0
    const value = useSelector(state => state.shopc.map(cartItem=>{
      try{
        initialshoppingcartitemcount += parseInt(cartItem.count)
        console.log('initialshoppingcartitemcount: ', initialshoppingcartitemcount);
        return initialshoppingcartitemcount
      }catch{
        return initialshoppingcartitemcount
      }
      
    }));

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
        <div className = 'row'>
        <div className = 'left'>
        <div className='mainPage'>
        {content}
        </div>
        </div>
        <div className = 'right'>
        <div className='checkout'>
        <p className = 'total'>Total({initialshoppingcartitemcount}items):{49.90* initialshoppingcartitemcount}</p>
        <div className='buttons'>
        <button className= 'continue'>Continue</button>
        <button className= 'proceedToCheckout'>Checkout</button>
        <button className= 'emptyCart'>EmptyCart</button>
        </div>
        </div>
        </div>
        </div>
    )
};

export default CheckoutIcon;