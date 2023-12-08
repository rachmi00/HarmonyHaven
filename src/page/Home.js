import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
import Styles from './home.module.css';
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaBed } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa";
import { LuParkingCircle } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { FaSuitcase } from "react-icons/fa6";
import { MdOutlinePhone } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import logo from '../assets/images/Harmony Haven.svg';
import { Link } from 'react-router-dom';

 
const Home = () => {
 
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              // ...
              console.log("uid", uid)
            } else {
              // User is signed out
              // ...
              console.log("user is logged out")
            }
          });
         
    }, [])
 
  return (
            
    <div className='all'>
            <header className={Styles.headerContainer}>
                <div className={Styles.navbar}>
                    <div className={Styles.logoBox}>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className={Styles.navLinksBox}>
                        <a href="#">Home</a>
                        <a href='#'>About</a>
                        <a href='#'>Rooms</a>
                        <a href='#'>Contact</a>
                    </div>
                    <div className={Styles.navbarSign}>
                        <Link to="signup" style={{textDecoration:'none',color:'white'}}>
                        <a>Sign up</a>
                        </Link>
                        <Link to="login" style={{textDecoration:'none',color:'white'}}>
                        <a>Login</a>
                        </Link>
                    </div>
                </div>
                <div className={Styles.headerTextbox}>
                    <h1 className={Styles.headingPrimary}>
                        <span>Harmony</span>
                        <span> Haven </span>
                        <code>&#8212;</code> where comfort meets convenience
                    </h1>
                    <p className={Styles.headerParagraph}>
                    From reservations to check-outs, elevate your hosting experience with convenience and comfort. 
                    Join us and create unforgettable stays effortlessly
                    </p>
                </div>
                <div className={Styles.headerBooking}>
                    <div className={Styles.bookingFilter}>
                        <div className={Styles.bookingFilterDetails}>
                            <span>Check in date</span>
                            <div className={Styles.filterIconBox}><FaRegCalendarAlt className={Styles.filterIcon}/><span>Add date</span></div>
                        </div>
                    </div>
                    <div className={Styles.bookingFilter}>
                        <div className={Styles.bookingFilterDetails}>
                            <span>Check out date</span>
                            <div className={Styles.filterIconBox}><FaRegCalendarAlt className={Styles.filterIcon}/><span>Add date</span></div>
                        </div>
                    </div>
                    <div className={Styles.bookingFilter}>
                        <div className={Styles.bookingFilterDetails1}>
                            <span>Number of guests</span>
                            <div className={Styles.filterIconBox}><FaRegUser className={Styles.filterIcon}/><span>1 Person</span></div>
                        </div>
                    </div>
                    <div className={Styles.bookingSearch}>
                        <Link to="login" style={{textDecoration:'none',color:'inherit'}}>
                            <a>Search</a>
                        </Link>
                    </div>
                </div>
            </header>
            <section className={Styles.workingStepsSection}>
                <div className={Styles.howWeWork}>
                    <div><h2>How we work</h2></div>
                    <div>
                        <h2>Book rooms easily with just a few steps</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi tenetur, minus atque itaque, nam facilis qui aut asperiores officia</p>    
                    </div>
                    <div>
                    <Link to="login" style={{textDecoration:'none',color:'inherit'}}>
                        <a className={Styles.btn}>Book now</a>
                    </Link>
                    </div>
                </div>
                <div className={Styles.workingSteps}>
                    <div>
                        <div className={Styles.stepNumber}>1</div>
                        <div className={Styles.stepContainer}>
                            <h3>Step 1</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum aliquid excepturi, in eum ea earum nulla fugit qui.</p>
                        </div>
                    </div>
                    <div>
                        <div className={Styles.stepNumber}>2</div>
                        <div className={Styles.stepContainer}>
                            <h3>Step 2</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum aliquid excepturi, in eum ea earum nulla fugit qui.</p>
                        </div>
                    </div>
                    <div>
                        <div className={Styles.stepNumber}>3</div>
                        <div className={Styles.stepContainer}>
                            <h3>Step 3</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum aliquid excepturi, in eum ea earum nulla fugit qui.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={Styles.roomsSection}>
                <div className={Styles.roomsSectionHeading}>
                    <h2>Our rooms</h2>
                   <div> <a href='#' className={`${Styles.btn} ${Styles.btnRounded}`}>See more</a></div>
                </div>
                <div className={Styles.roomsContainer}>
                    <div className={Styles.roomCard}>
                        <div className={Styles.roomCardImageContainer}>
                            <img src="https://html.merku.love/hosteller/img/rooms/01.webp" alt="Room image" />
                        </div>
                        <div className={Styles.roomCardInfo}>
                            <h3>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit
                            </h3>
                            <div className={Styles.roomCardIconsBox}>
                                <div><FaRegUser className={Styles.roomcardIcon}/><span>1 Person</span></div>
                                <div><FaBed className={Styles.roomcardIcon}/><span>1 Bed</span></div>
                            </div>
                            <div className={Styles.roomcardAvailability}>
                                <a href="#">See availability <span>&#8594;</span></a>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.roomCard}>
                        <div className={Styles.roomCardImageContainer}>
                            <img src="https://html.merku.love/hosteller/img/rooms/02.webp" alt="Room image" />
                        </div>
                        <div className={Styles.roomCardInfo}>
                            <h3>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit
                            </h3>
                            <div className={Styles.roomCardIconsBox}>
                                <div><FaRegUser className={Styles.roomcardIcon}/><span>1 Person</span></div>
                                <div><FaBed className={Styles.roomcardIcon}/><span>1 Bed</span></div>
                            </div>
                            <div className={Styles.roomcardAvailability}>
                                <a href="#">See availability <span>&#8594;</span></a>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.roomCard}>
                        <div className={Styles.roomCardImageContainer}>
                            <img src="https://html.merku.love/hosteller/img/rooms/03.webp" alt="Room image" />
                        </div>
                        <div className={Styles.roomCardInfo}>
                            <h3>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit
                            </h3>
                            <div className={Styles.roomCardIconsBox}>
                                <div><FaRegUser className={Styles.roomcardIcon}/><span>1 Person</span></div>
                                <div><FaBed className={Styles.roomcardIcon}/><span>1 Bed</span></div>
                            </div>
                            <div className={Styles.roomcardAvailability}>
                                <a href="#">See availability <span>&#8594;</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={Styles.servicesSection}>
                <div>
                    <h3>We have everything you need</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Consequatur doloremque distinctio tempore quisquam enim, 
                        modi vel illo illum pariatur deser.
                    </p>
                    <div className={Styles.servicesBox}>
                        <div className={Styles.service}>
                            <FaWifi className={Styles.serviceIcon}/>
                            <div>
                            Free available high speed WiFi
                            </div>
                        </div>
                        <div className={Styles.service}>
                            <LuParkingCircle className={Styles.serviceIcon}/>
                            <div>
                            Parking place allocated to you
                            </div>
                        </div>
                        <div className={Styles.service}>
                            <CiLocationOn className={Styles.serviceIcon}/>
                            <div>
                            Сonvenient location in the center
                            </div>
                        </div>
                        <div className={Styles.service}>
                            <FaSuitcase className={Styles.serviceIcon}/>
                            <div>
                            Free storage of luggage of any size
                            </div>
                        </div>
                    </div>
                    <div className={Styles.serviceActionbox}>
                        <a href="#" className={`${Styles.btn} ${Styles.btnRounded}`}>Book now</a>
                        <a href='#' className={Styles.btn2}>More about <span>&#8594;</span></a>
                    </div>
                </div>
                <div>

                </div>
            </section>
            <section className={Styles.contactSection}>
                <div>
                    <h3>Contacts</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Consequatur doloremque distinctio tempore quisquam enim, 
                        modi vel illo illum pariatur deser.
                    </p>
                    <div className={Styles.contactBox}>
                        <div className={Styles.contact}>
                            <MdOutlinePhone className={Styles.contactIcon}/>
                            <div>
                            <h3>Phone</h3>
                            <p>242341324123<br />792479801<br /></p>
                            </div>
                        </div>
                        <div className={Styles.contact}>
                            <IoMailOutline className={Styles.contactIcon}/>
                            <div>
                            <h3>Email</h3>
                            <p>email@email.com</p>
                            </div>
                        </div>
                        <div className={Styles.contact}>
                            <CiLocationOn className={Styles.contactIcon}/>
                            <div>
                            <h3>Location</h3>
                            <p>Where it is located</p>
                            </div>
                        </div>
                        <div className={Styles.contact}>
                            <CiClock2 className={Styles.contactIcon}/>
                            <div>
                            <h3>Working time</h3>
                            <p>Every day<br />6am to 9pm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className={Styles.footer}>
                <div>
                    <div>
                        <h3 className={Styles.harmony}>Harmony Haven</h3>
                        <p>
                        Where comfort meets convenience
                        </p>
                    </div>
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className={Styles.footerQuickLinks}>
                        <h3>Quick links</h3>
                        <p><a href="#">Home</a></p>
                        <p><a href="#">About</a></p>
                        <p><a href="#">Contact</a></p>
                        <p><a href="#">Rooms</a></p>
                    </div>

                </div>
                <div className={Styles.copyright}>
                    <p>&copy; 2023 Harmony Haven All rights reserved</p>
                </div>
            </footer>
    </div>
  )
}
 
export default Home