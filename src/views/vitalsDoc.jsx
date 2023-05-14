
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



export default function VitalsD() {


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
                    <div className="w-11/12 mx-auto items-center text-center justify-center py-5">
                        <form action="">

                            <div class="form-group mb-6">
                                    <textarea class="
                                    form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-nav-blue
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-nav-blue focus:bg-white focus:border-blue-600 focus:outline-none
                                " id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
                            </div>
                            <div class="form-group form-check text-center mb-6">
                                <input type="checkbox"
                                class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                                id="exampleCheck87" checked/>
                                <label class="form-check-label inline-block text-gray-800" for="exampleCheck87">Send me a copy of this
                                message</label>
                            </div>
                            <button type="submit" class="
                            w-full
                            px-6
                            py-2.5
                            bg-blue-600
                            text-white
                            font-medium
                            text-xs
                            leading-tight
                            uppercase
                            rounded
                            shadow-md
                            hover:bg-blue-700 hover:shadow-lg
                            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                            active:bg-blue-800 active:shadow-lg
                            transition
                            duration-150
                            ease-in-out">Send</button>
                            
                        </form>
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