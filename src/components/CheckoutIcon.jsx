import './CheckoutIcon.css';
import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import ShopCartItem from './ShopCartItem'
import Modal from 'react-modal';

Modal.setAppElement('#root'); 

const CheckoutIcon = () => {
    
     const [modalIsOpen, setModalIsOpen] = useState(false);
     const [orderDetails,setOrderDetails]=useState(null);
     const [print,setPrint]=useState(false);

     function getOrderDetails(val)
     {
       console.warn(val.target.value);
       setOrderDetails(val.target.value);
       setPrint(false);
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
                    <div className='mainPage'>
                        {content}
                    </div>
                </div>
                <div className='right'>
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
                                            onChange={getOrderDetails}
                                        ></input>
                                    </li>
                                    <li>
                                        <label>Name</label>
                                        <input
                                        className='nameInput'
                                            name="name"
                                            type="text"
                                            required
                                        ></input>
                                    </li>
                                    <li>
                                        <label>Address</label>
                                        <input
                                        className='addressInput'
                                            name="address"
                                            type="text"
                                            required
                                        ></input>
                                    </li>
                                    <li>
                                    <button onClick= {() => setModalIsOpen(true)}        
                                    className='checkoutButton' type="submit">Checkout</button>
                                    </li>
                                    <Modal isOpen={modalIsOpen} className = 'overlayOrder'
                                      onClick={()=>setPrint(true)}>
                                        <div className='orderDetails'>

                                           
                                                 {orderDetails}
                                            
                                             </div>
                                        <h1>Order confirmation</h1>
                                        <div>
                                            <button className = 'close' onClick= {() => setModalIsOpen(false)} >Close</button>
                                        </div>
                                    </Modal>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

};

export default CheckoutIcon;