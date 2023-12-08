import Styles from './signup.module.css';
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function SignUp() {

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
                                        <input type="text" name="first name" className={Styles.formName}/>
                                    </div> 
                                </div>
                                <div>
                                    <label htmlFor="lastname" className={Styles.formLabel}>Last Name</label>
                                    <div className={Styles.inputContainer}>
                                        <input type="text" name="lastname" className={Styles.formName}/>
                                    </div> 
                                </div>

                            </div>
                            <label htmlFor="email" className={Styles.formLabel}>Email</label>
                            <div className={Styles.inputContainer}>
                                <input type="email" name="email" className={Styles.formEmail}/>
                            </div>  
                            <label htmlFor="password" className={Styles.formLabel}>Password</label>
                            <div className={Styles.inputContainer}>
                                <input type="password" name="password" className={Styles.formPassword}/>
                            </div>
                            <label htmlFor="password again" className={Styles.formLabel}>Confirm Password</label>
                            <div className={Styles.inputContainer}>
                                <input type="password" name="password again" className={Styles.formPassword}/>
                            </div>
                            <a href="#" className={Styles.signupButton}>Sign up</a>
                            <a href='#' className={Styles.signupOther}><FcGoogle className={Styles.signupOtherIcon1}/> <span>Sign up with Google</span></a>
                            <a href='#' className={Styles.signupOther}><FaFacebook className={Styles.signupOtherIcon2}/> <span>Sign up with Facebook</span></a>

                            <div className={Styles.formSignUp}>
                                <span>Already have an account?</span>
                                <a href="#">Sign in</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}