
import React from "react";
//import Login from "./login";
// import Logo from '../img/logo3.svg'
import NavHome from "./navBarHome";
import svg1 from '../img/logo2.png'
//import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "./Buttons_HS";

//import {faFacebook, faTwitter, faGoogle, faLinkedin} from '@fortawesome/free-brands-svg-icons'

import '../css/home_view.css'
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
// import {faUserDoctor} from '@fortawesome/free-solid-svg-icons'

import '../css/home.css'

import { useEffect } from 'react';

export default function Home() {


  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  useEffect(() => {
    if (isLoggedIn === 'true') {
      navigate('/user');
    }
  }, [isLoggedIn, navigate]);
  // const [goToLogin, setGoToLogin] = React.useState(false);

  // if (goToLogin) {
  //     return <Navigate to="./login" />;
  // }

  //let url="";


  return (
    <section className="relative h-screen w-full bg-[url('/src/img/bg_oficial.png')] bg-no-repeat bg-center bg-fixed bg-cover overflow-y-hidden ">

      <NavHome />

      <div className=" bg-white w-full h-full lg:bg-opacity-0 lg:mt-2 pt-3 ">

        <div className="flex flex-col justify-center text-center items-center h-3/4 mt">

          <h2 className="text-nav-blue text-2xl font-medium mt-3">Stay healthy, effortlessly.</h2>

          <div>
            <img src={svg1} alt="" className="img_home h-72" />
          </div>

          <h1 className="md:text-5xl text-3xl text-nav-blue font-semibold py-5">
            Book your next appointment with ease
          </h1>
          <div className="text-xl" onClick={() => { navigate("/login"); }} >
            <Button text="Get Started" />
          </div>
          {/* <div className="desc-container">
                <div className="description-part">
                    <p className="firts-quote">Stay healthy, effortlessly.</p>
                    <p className="second-quote"> Book your next appointment with ease</p>

                    <div className="btn-home-view">
                      <button href={url} className= "btn-icon" onClick={() => { navigate("/login"); }}>
                        
                        Get Started<FontAwesomeIcon icon={faUserDoctor} className="fa-icon"/>
                      </button>
                    </div>

                </div>
            </div>

            <div className="image-container">
                <div className="vector"/>
                <div>
                    <img src={svg1} alt="" className="img_home" />
                </div>

            </div> */}
        </div>

      </div>

    </section>
  );

}


