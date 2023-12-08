import Styles from './signup.module.css';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase';

 const SignUp=()=> {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
 
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
     
 
   
    }
    return(
        <>
            <div className={Styles.container}>
                <div className={Styles.signupContainer}>
                    <div className={Styles.signupFormBackground}></div>
                    <div className={Styles.signupFormBox}>
                        <h1 className={Styles.signupFormHeader}>Welcome!</h1>
                        <p className={Styles.signupFormParagraph}>Please, Enter your details</p>
                        <form  className={Styles.signupForm}>
                            <div className={Styles.nameContainer}>
                                <div>
                                    <label htmlFor="firstname" className={Styles.formLabel}>First Name</label>
                                    <div className={Styles.inputContainer}>
                                        <input type="text" name="first name" className={Styles.formName} required/>
                                    </div> 
                                </div>
                                <div>
                                    <label htmlFor="lastname" className={Styles.formLabel}>Last Name</label>
                                    <div className={Styles.inputContainer}>
                                        <input type="text" name="lastname" className={Styles.formName} required/>
                                    </div> 
                                </div>

                            </div>
                            <label htmlFor="email" className={Styles.formLabel} >Email</label>
                            <div className={Styles.inputContainer}>
                                <input type="email" name="email" className={Styles.formEmail}   onChange={(e) => setEmail(e.target.value)} required />
                            </div>  
                            <label htmlFor="password" className={Styles.formLabel}>Password</label>
                            <div className={Styles.inputContainer}>
                                <input type="password" name="password" className={Styles.formPassword}   onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                            <label htmlFor="password again" className={Styles.formLabel}>Confirm Password</label>
                            <div className={Styles.inputContainer}>
                                <input type="password" name="password again" className={Styles.formPassword} required/>
                            </div>
                            <input type="submit" value="Sign up" className={Styles.signupButton}   onClick={onSubmit}/>
                            <a href='#' className={Styles.signupOther}><FcGoogle className={Styles.signupOtherIcon1}/> <span>Sign up with Google</span></a>
                            <a href='#' className={Styles.signupOther}><FaFacebook className={Styles.signupOtherIcon2}/> <span>Sign up with Facebook</span></a>

                            <div className={Styles.formSignUp}>
                                <span>Already have an account?</span>
                                <NavLink to="/login" >
                            Sign in
                        </NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SignUp;