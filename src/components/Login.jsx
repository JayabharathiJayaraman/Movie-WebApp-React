import './login.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Modal from 'react-modal';
import Zoom from "react-reveal/Zoom";

const Login = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisabled] = useState(true);
    const currentloginuser = useSelector(state => state.login.currentuser);

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    

    function getEmail(val) {
        console.warn(val.target.value);
        setEmail(val.target.value);
        if(val.target.value.length != null){
            setDisabled(false);
        } else{
            setDisabled(true);
        }
    }

    function getPassword(val) {
        console.warn(val.target.value);
        setPassword(val.target.value);
    }

    function closeModel(){
        setModalIsOpen(false)
    }

    
    return(
        <>
        <div className= 'loginPage'>
        <div className ='login'>
            <form className='login-form' onSubmit = {(e) => handleSubmit(e)}>
                                <ul>
                                    <div>
                                        <label className = 'email'>Email</label>
                                        <input
                                            className='emailInput'
                                            type="text"
                                            onChange={getEmail}
                                        ></input>
                                    </div>
                                    <div>
                                        <label className='password'>Password</label>
                                        <input
                                            className='passwordInput'
                                            type="text"
                                            onChange={getPassword}
                                        ></input>
                                    </div>
                                    <div className ='buttons'>
                                    <div>
                                    <button type="submit">LogIn</button>
                                    </div>
                                    <div>
                                    <button onClick={() => {
                                            setModalIsOpen(true)
                                        }}
                                    type="submit">SignIn</button>
                                    </div>
                                    <Modal isOpen={modalIsOpen} className='reg-modal-wrapper'>
                                    <Zoom>
                                    <div className="modal-header">
                                            <h2>Register Account</h2>
                                            <div>
                                            <button onClick= {closeModel} className='close'>X</button>
                                            </div>
                                            </div>
                                        <div className='registerDetails'>
                                        <p>
                                        <label className = 'email'>Email</label>
                                        <input
                                            className='emailInput'
                                            type="text"
                                            onChange={getEmail}
                                        ></input>
                                    </p>
                                    <p>
                                        <label className='password'>Password</label>
                                        <input
                                            className='passwordInput'
                                            type="text"
                                            onChange={getPassword}
                                        ></input>
                                    </p>
                                    <div className ='buttons'>
                                    <button type="submit">Register</button>
                                    </div>                
                                        </div>    
                                        <div className="modal-footer">
                                        
                                        <button onClick={closeModel} className="btn-close">Close</button>
                                        </div>
                                        </Zoom>
                                    </Modal>
                                    </div>
                                    </ul>
                                    </form>
        </div>
        </div>
        </>
    )
};

export default Login;