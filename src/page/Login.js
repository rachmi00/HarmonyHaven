import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom'

import Styles from './login.module.css';
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

 
const Login=()=>{
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/book")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }

    return(
        <>
            <div className={Styles.container}>
                <div className={Styles.loginContainer}>
                    <div className={Styles.loginFormBackground}></div>
                    <div className={Styles.loginFormBox}>
                        <h1 className={Styles.loginFormHeader}>Welcome back!</h1>
                        <p className={Styles.loginFormParagraph}>Please, Enter your details</p>
                        <form  className={Styles.loginForm} >
                            <label htmlFor="email" className={Styles.formLabel}>Email</label>
                            <div className={Styles.inputContainer}>
                                <input type="email" name="email" className={Styles.formEmail} onChange={(e)=>setEmail(e.target.value)} required/>
                            </div>  
                            <label htmlFor="password" className={Styles.formLabel}>Password</label>
                            <div className={Styles.inputContainer}>
                                <input type="password" name="password" className={Styles.formPassword}  onChange={(e)=>setPassword(e.target.value)} required/>
                                <AiOutlineEyeInvisible className={Styles.inputIcon}/>
                            </div>
                            <div className={Styles.formService}>
                                <div>
                                <input type="checkbox" name='remember me' /> 
                                <span>Remember me</span>
                                </div>
                                <div>
                                    <a href="#">Forgot Password?</a>
                                </div>
                            </div>
                            <input type="submit" value="Login" className={Styles.loginButton} onClick={onLogin} />
                            <a href='#' className={Styles.loginOther}><FcGoogle className={Styles.loginOtherIcon1}/> <span>Sign in with Google</span></a>
                            <a href='#' className={Styles.loginOther}><FaFacebook className={Styles.loginOtherIcon2}/> <span>Sign in with Facebook</span></a>

                            <div className={Styles.formSignUp}>
                                <span>Don't have an account yet?</span>
                                <NavLink to="/signup">
                                Sign up
                            </NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login
