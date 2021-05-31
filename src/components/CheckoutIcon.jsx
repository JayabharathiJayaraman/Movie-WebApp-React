import './CheckoutIcon.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShopCartItem from './ShopCartItem'
import { actionsshopcart } from "../features/shoppingcart";


const CheckoutIcon = (props) => {

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
    const emptyCart = ()=>{
        console.log('shopcart', shopCart)
        const movieId ={imdbid: props.imdb}
        console.log('movieId', movieId)
        if(props.count > 1){
            dispatch(actionsshopcart.emptyCart)
        }
        
    }
    function myFunction() {
        var x = document.getElementById("checkoutDetails");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
    //const totalPrice = 
    return(
        <>
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
        <button className= 'proceed' onClick={myFunction}>Proceed</button>
        <button className= 'emptyCart' onClick = {emptyCart}>EmptyCart</button>
        </div>
        </div>
        </div>
        </div>
        <div id='checkoutDetails'>
            <form>
        <ul className="form-container">
                        <li>
                          <label>Email</label>
                          <input
                            name="email"
                            type="email"
                            required
                          ></input>
                        </li>
                        <li>
                          <label>Name</label>
                          <input
                            name="name"
                            type="text"
                            required
                          ></input>
                        </li>
                        <li>
                          <label>Address</label>
                          <input
                            name="address"
                            type="text"
                            required
                          ></input>
                        </li>
                        <li>
                          <button className='checkoutButton' type="submit">
                            Checkout
                          </button>
                        </li>
                      </ul>
                      </form>
        </div>
        </>
    )
};

export default CheckoutIcon;