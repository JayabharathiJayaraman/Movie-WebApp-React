import './login.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Modal from 'react-modal';
import Zoom from "react-reveal/Zoom";
import { actionsLogin } from "../features/login";
import { auth } from '../features/firebase';
import Validation from './Validation'



const Login = () => {

    const dispatch = useDispatch();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [values, setValues] = useState({
        email:"",
        password:"",
    });
    
    const [disabled, setDisabled] = useState(true);
    const [errors, setErrors] = useState({});

    const currentloginuser = useSelector(state => state.login.currentuser);

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }
    
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name] : event.target.value,
            
        });
    };
    
    function showError(){
        setErrors(Validation(values));
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
                                            name="email"
                                            value={values.email}
                                            onChange={handleChange}
                                        ></input>
                                        {errors.email && <p className='emailError'>{errors.email}</p>}
                                    </div>
                                    <div>
                                        <label className='loginPassword'>Password</label>
                                        <input
                                            className='loginPasswordInput'
                                            type="password"
                                            name="password"
                                            value={values.password}
                                            onChange={handleChange}
                                        ></input>
                                        {errors.password && <p className='passwordError'>{errors.password}</p>}
                                    </div>
                                    <div className ='buttons'>
                                    <div>
                                    <button type="submit" onClick={() => {
                                            LoginUser(values.email,values.password)
                                            showError()
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
                                            onChange={handleChange}
                                        ></input>
                                         
                                    </p>
                                    <p>
                                        <label className='password'>Password</label>
                                        <input
                                            className='passwordInput'
                                            type="password"
                                            onChange={handleChange}
                                        ></input>
                                         
                                    </p>                                       
                                        </div>    
                                        <div className="modal-footer">
                                        <button onClick={() => {
                                          RegisterUser(values)
                                          console.log('values', values);
                                    
                                        }}
                                            className="registerButton">Register</button>
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