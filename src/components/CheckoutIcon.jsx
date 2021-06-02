import './CheckoutIcon.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import ShopCartItem from './ShopCartItem'
import { actionsshopcart } from "../features/shoppingcart";
import Modal from 'react-modal';
import Fade from "react-reveal/Fade";

Modal.setAppElement('#root');
const CheckoutIcon = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [emailOrderDetails, setEmailOrderDetails] = useState(null);
    const [nameOrderDetails, setNameOrderDetails] = useState(null);
    const [addressOrderDetails, setAddressOrderDetails] = useState(null);
    const [disabled, setDisabled] = useState(true);

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
    const content = shopCart.map(item => {
        try {
            return (<div>
                <ShopCartItem count={item.count} title={item.movie.Title}
                    img={item.movie.Poster} imdb={item.movie.imdbID}
                />
            </div>)
        } catch {
            return []
        }
    }

    )

    //const totalPrice = 
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
                        <p className='total'>Total({initialshoppingcartitemcount}items):{49.90 * initialshoppingcartitemcount}</p>
                        <div id='checkoutDetails'>
                            <form>
                                <ul className="form-container">
                                    <li>
                                        <label>Email</label>
                                        <input
                                            className='emailInput'
                                            name="email"
                                            type="email"
                                            required
                                            onChange={getEmail}
                                        ></input>
                                    </li>
                                    <li>
                                        <label>Name</label>
                                        <input
                                            className='nameInput'
                                            name="name"
                                            type="text"
                                            required
                                            onChange={getName}
                                        ></input>
                                    </li>
                                    <li>
                                        <label>Address</label>
                                        <input
                                            className='addressInput'
                                            name="address"
                                            type="text"
                                            required
                                            onChange={getAddress}
                                        ></input>
                                    </li>
                                    <li>
                                        <button disabled = {disabled} onClick={() => setModalIsOpen(true)}

                                            className='checkoutButton' type="submit">Checkout</button>
                                    </li>
                                    <Modal isOpen={modalIsOpen} className='modal-wrapper'>
                                    <div className="modal-header">
                                            <h2>Order Confirmation</h2>
                                            <div>
                                            <button className='close' onClick={() => {
                                                dispatch(actionsshopcart.clearCart())
                                                setModalIsOpen(false)
                                            }} >X</button>
                                            </div>
                                            </div>
                                        <div className='orderDetails'>
                                            <h3>Your order has been placed</h3>
                                            <p>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{emailOrderDetails}</p>
                                            <p>Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{nameOrderDetails}</p>
                                            <p>Address:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {addressOrderDetails}</p>
                                        </div>    
                                        <div className="modal-footer">
                                            <p>Thankyou for ordering!</p>
                                        <button onClick={() => {
                                                dispatch(actionsshopcart.clearCart())
                                                setModalIsOpen(false)
                                            }} className="btn-close">Close</button>
                                        </div>
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