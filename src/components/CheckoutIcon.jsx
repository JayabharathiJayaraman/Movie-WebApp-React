import './CheckoutIcon.css';
import React, {useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import ShopCartItem from './ShopCartItem'
import { actionsshopcart } from "../features/shoppingcart";
import Modal from 'react-modal';
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import db from '../features/firebase';
import { auth } from '../features/firebase';
import { actionsLogin } from "../features/login";
import { actionsshoppinghistory } from "../features/usershoppinghistory";
import Login from './Login';
import { render } from '@testing-library/react';
import { Link, Route } from 'react-router-dom';

Modal.setAppElement('#root');
const CheckoutIcon = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [emailOrderDetails, setEmailOrderDetails] = useState(null);
    const [nameOrderDetails, setNameOrderDetails] = useState(null);
    const [addressOrderDetails, setAddressOrderDetails] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const currentloginuser = useSelector(state => state.login.currentuser);
    const [contentt, setContent] = useState(null)
    useEffect(() => {
        if(!currentloginuser){
                                                
            setContent(
                <Link className='loginCheckout' to="/user">Login and Checkout</Link>
            )                                  
                                                
        }else{
           
            setContent(
                <button  onClick={() => {
                    if(!currentloginuser){
                        
                        
                        
                    }else{
                       
                        setModalIsOpen(true)
                    }
                    
                }}

                    className='checkoutButton' type="submit">Checkout</button>
                
            ) 
        }
    }, []);

    function getEmail(val) {
        console.warn(val.target.value);
        setEmailOrderDetails(val.target.value);
        if(val.target.value.length != null){
            setDisabled(false);
        } else{
            setDisabled(true);
        }
    }

    

    function getName(val) {
        console.warn(val.target.value);
        setNameOrderDetails(val.target.value);
    }
    function getAddress(val) {
        console.warn(val.target.value);
        setAddressOrderDetails(val.target.value);
    }
    let initialshoppingcartitemcount = 0
    const value = useSelector(state => state.shopc.map(cartItem => {
        try {
            initialshoppingcartitemcount += parseInt(cartItem.count)
            console.log('initialshoppingcartitemcount: ', initialshoppingcartitemcount);
            return initialshoppingcartitemcount
        } catch {
            return initialshoppingcartitemcount
        }

    }));

    const dispatch = useDispatch();
    const shopCart = useSelector(state => state.shopc);
    console.log('length', shopCart.length)
    const DB_KEY = uuidv4()
    const ORDERNUMBER = uuidv5()

    function getTotalPrice(){
        let totalPrice = 0
        shopCart.forEach(item => {
            totalPrice = totalPrice + (item.count * parseFloat(item.movie.Price))
        })
        return totalPrice
    }  

    const content = shopCart.map(item => {
        try {
            return (<div>
                <ShopCartItem count={item.count} title={item.movie.Title}
                    img={item.movie.Poster} imdb={item.movie.imdbID} 
                    price={item.movie.Price}
                />
            </div>)
        } catch {
            return []
        }
    }

    )
    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }

      function uuidv5() {
        return 'xxxxxxxx-xxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      }

    function closeCheckout(){
        console.log('close checkout')
        db.collection("checkout").doc(DB_KEY).set({
            key: DB_KEY,
            orderNumber: ORDERNUMBER,
            email: "email",
            name: "name",
            address:"address",
            orders: shopCart,
            rated: false,
            timestamp: Date.now(),
            uid: currentloginuser.uid
        })
        .then(function() {
            console.log("Document successfully written!");
            console.log('THIS IS THE reducer data', currentloginuser);
            
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
        dispatch(actionsshopcart.clearCart())
        setModalIsOpen(false)
        setEmailOrderDetails('');
        setNameOrderDetails('');
        setAddressOrderDetails('');
    }
    
    //const totalPrice = 
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    return (
        <>
            <div className='row'>
                <div className='left'>
                    <Fade left cascade>
                    <div className='mainPage'>
                        {content}
                    </div>
                    </Fade>
                </div>
                <div className='right'>
                    <Fade right cascade>
                    <div className='checkout'>
                        <p className='total'>Total({initialshoppingcartitemcount}items):{getTotalPrice()}kr</p>  
                        <div id='checkoutDetails'>
                        <form onSubmit = {(e) => handleSubmit(e)}>
                                <ul className="form-container">
                                   
                                    <li>
                                    
                                    
                                        {contentt}
                                    </li>
                                    
                                    <Modal isOpen={modalIsOpen} className='modal-wrapper'>
                                    <Zoom>
                                    <div className="modal-header">
                                            <h2>Order Confirmation</h2>
                                            <div>
                                            <button className='close' onClick={closeCheckout} >X</button>
                                            </div>
                                            </div>
                                        <div className='orderDetails'>
                                            <h3>Your order has been placed</h3>
                                            <p>Ordernumber: {ORDERNUMBER}</p>
                                            <p>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{emailOrderDetails}</p>
                                            <p>Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{nameOrderDetails}</p>
                                            <p>Address:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {addressOrderDetails}</p>
                                        </div>    
                                        <div className="modal-footer">
                                            <p>Thankyou for ordering!</p>
                                        <button onClick={closeCheckout} className="btn-close">Close</button>
                                        </div>
                                        </Zoom>
                                    </Modal>
                                    
                                </ul>
                            </form>
                        </div>
                    </div>
                    </Fade>
                </div>
            </div>

        </>
    )

};

export default CheckoutIcon;