import './login.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Modal from 'react-modal';
import Zoom from "react-reveal/Zoom";
import { actionsLogin } from "../features/login";

import { auth } from '../features/firebase';



const Login = () => {
    const dispatch = useDispatch();
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

    async function RegisterUser(email, password) {
        
        try {
            console.log('try registering user',email + ' '+password )
            //await auth.createUserWithEmailAndPassword(email, password)
            const response = await auth.createUserWithEmailAndPassword(email, password);
            const login = response.user 
            console.log('THIS IS THE RESPONSE', login.uid);
            dispatch(actionsLogin.login(login))
            console.log('THIS IS THE reducer data after register', currentloginuser);
            if(response){
                closeModel();
            }
            
            
        } catch {
            console.log('error registering user')
        }
    }

    async function LoginUser(email, password) {
        
        try {
            console.log('try login user',email + ' '+password )
            
            const response = await auth.signInWithEmailAndPassword(email, password);
            const login = response.user 
            console.log('THIS IS THE RESPONSE', login.uid);
            dispatch(actionsLogin.login(login))
            console.log('THIS IS THE reducer data after login', currentloginuser);
            if(response){
                
                closeModel();
            }
            
            
        } catch {
            console.log('error registering user')
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
                                        <label className = 'loginEmail'>Email</label>
                                        <input
                                            className='loginEmailInput'
                                            type="text"
                                            onChange={getEmail}
                                        ></input>
                                    </div>
                                    <div>
                                        <label className='loginPassword'>Password</label>
                                        <input
                                            className='loginPasswordInput'
                                            type="text"
                                            onChange={getPassword}
                                        ></input>
                                    </div>
                                    <div className ='buttons'>
                                    <div>
                                    <button type="submit" onClick={() => {
                                            LoginUser(email,password)
                                            setModalIsOpen(true)
                                            
                                        }}>LogIn</button>
                                    </div>
                                    <div>
                                    <button onClick={() => {
                                            setModalIsOpen(true)
                                        }}
                                    type="submit">Register</button>
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
                                        </div>    
                                        <div className="modal-footer">
                                        <button onClick={closeModel} className="registerButton">Register</button>
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