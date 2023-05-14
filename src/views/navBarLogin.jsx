import React from "react";
import { Link } from "react-router-dom";
//import Login from "./login";
import Logo from '../img/logo3.svg'
//import NavLinks from "./NavLinks";
//import Button from "./Buttons_HS";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { DelayLink } from 'react-router-delay-link';


import '../css/navHome.css'


export default function NavLogin() {
    
    
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  

  return (


      <nav className="bg-nav-blue ">

        <div className="flex items-center font-medium justify-around">

          <div className="z-50 p-5 md:w-auto w-full flex justify-between">

            <img src={Logo} alt="Logo" className="  h-12 md:cursor-pointer " onClick={() => { navigate("/"); }}/>

            <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
              <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-12 text-white cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
              </svg>
            </div>

          </div>

          <ul className="md:flex hidden uppercase items-center gap-8 font-semibold text-white">

            <li>
              <Link to="/" className="py-7 px-3 inline-block">

                About Us
              </Link>
            </li>

            <div className="md:flex hidden cursor-pointer gap-8 uppercase">

                
                <Link to="/" className="py-7 px-3  inline-block">

                  Support
                </Link>

                <Link to="/" className="py-7 px-3  inline-block">

                  Contact Us
                </Link>

                


            </div>

           
            

          </ul>


          <div className="md:block hidden">
            <button className="bg-sky-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-white hover:text-nav-blue transition duration-500 ease-in-out  lg:mr-4 " onClick={() => { localStorage.setItem("isLoggedIn", 'false'); navigate("/");}}>
              Log Out
            </button>
            
          </div>

          {/* Mobile Nav */}

          <ul className={`md:hidden bg-nav-blue absolute w-full h-full bottom-0 py-24 pl-4 text-white duration-500 ${open ? "left-0" : "left-[-100%]"}`}>

            <li>
              <Link to="/" className="py-7 px-3  inline-block">

                About Us
              </Link>
            </li>

            <div className="flex flex-col cursor-pointer">


              <Link to="/" className="py-7 px-3  inline-block">

                Support
              </Link>

              <Link to="/" className="py-7 px-3  inline-block">

                Contact Us
              </Link>

              


            </div>

            <div className="py-5">
              <button className="bg-sky-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-white hover:text-nav-blue transition duration-500 ease-in-out  lg:mr-4 " onClick={() => { localStorage.setItem("isLoggedIn", 'false'); navigate("/");}}>
                Log Out
              </button>
            </div>
            

          </ul>


        </div>
        {/* <nav className="bg-nav-blue px-12 py-5 relative ">

          <div className="mx-auto flex">

            <div className="flex flex-grow">
              <img src={Logo} alt="Logo" className="  h-12"/>
            </div>
            
            <div className="flex lg:hidden">
              <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-10 text-white " onClick={openMenu}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
              </svg>
            </div>
            <div id="menu" className="lg:flex hidden flex-grow justify-between  ">
              <div className="pt-3 ">
                

                <a href={url} className="text-white  lg:mr-7">About Us</a>
                <a href={url} className="text-white lg:mr-7">Services</a>
                <a href={url} className="text-white lg:mr-7">Support</a>
                <a href={url} className="text-white lg:mr-7">Contact Us</a>
                  

                
              </div>
              <div className="pt-3">

                <a href={url} className="text-white border border-white py-2.5 px-5 rounded-md hover:bg-white hover:text-nav-blue transition duration-500 ease-in-out lg:mr-4">Log In</a>
                <a href={url} className="text-white border bg-blue-500 border border-blue-500 py-2.5 px-5 ml-2 rounded-md  hover:bg-blue-600
                hover:border-blue-600 transition duration-500 ease-in-out">Register</a>

              </div>
            </div>

          </div>
          
          
        </nav> */}
        {/* <nav className="nav">
          <div className="container-nav">
            
            <button className = "logo-container"  onClick={() => { navigate("/"); }} >

              <img src={Logo} className="image" alt=""></img>
              <h3> Health <span>Sync</span></h3>
            </button>

            <div className="nav-btn">
              <div className="nav-links">

                <ul>


                  <li className="nav-link">

                    <a className="fas fa-caret-down" href={url}>  
                                   
                      About Us <FontAwesomeIcon icon={faPerson} className="fa-icon"/> 
                    </a>
                    
                  </li>

                  <li className="nav-link">
                      <a className="fas fa-caret-down" href={url}>  
                                      
                          Services <FontAwesomeIcon icon={faCaretDown} className="fa-icon"/> 
                      </a>

                      <div className="dropdown">
                        <ul>

                          <li className="dropdown-link">

                            <a href={url}> Link1</a>

                          </li>

                          <li className="dropdown-link">

                            <a href={url}> Link1</a>

                          </li>

                          <li className="dropdown-link">

                            <a href={url}> Link1</a>

                          </li>
                          <div class="arrow"></div>
                          
                        </ul>


                      </div>


                  </li>

                  <li className="nav-link">
                      <a className="fas fa-caret-down" href={url}>  
                                      
                          Support <FontAwesomeIcon icon={faCaretDown} className="fa-icon"/> 
                      </a>
                      <div className="dropdown">
                        <ul>

                          <li className="dropdown-link">

                            <a href={url}> Help</a>

                          </li>

                          <li className="dropdown-link">

                            <a href={url}> Contact Us</a>

                          </li>

                          <li className="dropdown-link">

                            <a href={url}> Give Feedback</a>

                          </li>
                          <div class="arrow"></div>
                          
                        </ul>

                      </div>
                  </li>

                </ul>
                
              </div>

              <div className="log-sign">
                <button  className = "btn-home transparent" onClick={() => { navigate("/login"); }}>
                  Log in
                </button> 
              </div>

            </div>

            <div class="hamburger-menu-container">
              <div class="hamburger-menu">
                  <div></div>
              </div>
            </div> 

          </div>

          


          
        </nav> */}

        {/* <h1>Home Page</h1>


        <button onClick={() => { setGoToLogin(true); }}   >
          {" "}Home
        </button> */}

      </nav>
        
        
        

    );

}


