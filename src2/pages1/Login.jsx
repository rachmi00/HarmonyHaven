import Styles from './login.module.css';
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function Login() {

    return(
        <>
            <div className={Styles.container}>
                <div className={Styles.loginContainer}>
                    <div className={Styles.loginFormBackground}></div>
                    <div className={Styles.loginFormBox}>
                        <h1 className={Styles.loginFormHeader}>Welcome back!</h1>
                        <p className={Styles.loginFormParagraph}>Please, Enter your details</p>
                        <form  className={Styles.loginForm}>
                            <label htmlFor="email" className={Styles.formLabel}>Email</label>
                            <div className={Styles.inputContainer}>
                                <input type="email" name="email" className={Styles.formEmail}/>
                            </div>  
                            <label htmlFor="password" className={Styles.formLabel}>Password</label>
                            <div className={Styles.inputContainer}>
                                <input type="password" name="password" className={Styles.formPassword}/>
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
                            <a href="#" className={Styles.loginButton}>Login</a>
                            <a href='#' className={Styles.loginOther}><FcGoogle className={Styles.loginOtherIcon1}/> <span>Sign in with Google</span></a>
                            <a href='#' className={Styles.loginOther}><FaFacebook className={Styles.loginOtherIcon2}/> <span>Sign in with Facebook</span></a>

                            <div className={Styles.formSignUp}>
                                <span>Don't have an account yet?</span>
                                <a href="#">Sign Up</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}