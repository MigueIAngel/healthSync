
import React from "react";
//import Login from "./login";
// import Logo from '../img/logo3.svg'
import NavHome from "./navBarLogin";
import svg1 from '../img/logo2.png'
//import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "./Buttons_HS";

//import {faFacebook, faTwitter, faGoogle, faLinkedin} from '@fortawesome/free-brands-svg-icons'

import '../css/home_view.css'
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
// import {faUserDoctor} from '@fortawesome/free-solid-svg-icons'

import '../css/home.css'



export default function Vitals() {


    const navigate = useNavigate();
    
    // const [goToLogin, setGoToLogin] = React.useState(false);

    // if (goToLogin) {
    //     return <Navigate to="./login" />;
    // }
    
    //let url="";
    

    return (

        <div className="">

            <NavHome/>

            <div>
                <div className="bg-nav-blue mt-6 text-5xl text-white rounded-lg shadow-xl w-11/12 mx-auto items-center text-center justify-center py-5">
                    <h1>Name</h1>
                </div>
                <div className="flex flex-col">
                    <div className="text-nav-blue text-2xl ml-16 mt-5">
                        <h3>
                            Medical Record
                        </h3>
                    </div>

                    <div className="bg-slate-400 text-nav-blue rounded-lg shadow-xl w-11/12 h-full mx-auto items-center text-justify justify-center py-5 my-10">
                        <p className="px-10">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum neque similique quae obcaecati debitis placeat saepe! Sint, explicabo pariatur. 
                            Dolore libero ratione iure quaerat asperiores voluptas aliquam quia quam beatae.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae odit iste consequuntur optio pariatur et quae maiores eius? 
                            Laborum aut repellendus quo dolorum tempora velit quos? Ipsam nostrum fugit est?
                        </p>
                    </div>

                </div>
            </div>

            
      
        </div>
    );

}
  

