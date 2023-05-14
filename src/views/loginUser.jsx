
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import NavHome from "./navBarHome";
import Button from "./Buttons_HS";
import axios from 'axios';




import '../css/login.css'



export default function Login() {
    const navigate = useNavigate();
    const [response, setResponse] = useState("");
    const [error, setError] = useState("");
    function handleClick(event){
      event.preventDefault();
      
      var user= document.getElementById("user").value;
      var password = document.getElementById("pass").value;
      const data = {
        "username":user,
        "password":password
      };
      
      axios.post('http://127.0.0.1:8000/generate_token', data)
        .then(response => {
          setResponse(response.data);
          localStorage.setItem("isLoggedIn", true);
          navigate("/user");
        })
        .catch(error => {
           setError("Error en las credenciales");
           
        });
       
      }
    return (
        <div className="relative h-screen w-full bg-[url('/src/img/bg_oficial.png')] bg-no-repeat bg-center bg-fixed bg-cover overflow-y-visible md:overflow-y-hidden">

          <NavHome/>

          <div className="">
            <div className="bg-white w-full h-screen lg:bg-opacity-0 ">

              <div className="flex flex-col md:flex-row justify-around ">

                {/*Left*/}
                <div className="flex flex-col text-center space-y-10 justify-center items-center h-screen">

                  <div className="text-4xl font-sans font-bold text-nav-blue">
                    <p className=""> Register</p>
                  </div>

                  <div className="text-sky-700">
                    <p> Stay healthy, effortlessly. <br/> Book your appoiment with ease</p>
                  </div>

                  <div onClick={() => { navigate("/registerUser"); }}>
                    <Button text= " Sign Up"/>
                  </div>

                </div>
                {/*Right*/}
                <div className="flex flex-col justify-center items-center mb-14">

                  <div className="text-4xl font-sans font-bold text-nav-blue">
                    <p>Welcome</p>
                  </div>

                  <div className="flex flex-row space-x-8 " >
                    <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-20 text-nav-blue">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  </div>
                  <form action="" className="items-center justify-center">
                    <div className="flex flex-col space-y-9">
                      <input id="user" type="text" placeholder="Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-nav-blue dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                      <input id="pass" type="password" placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-nav-blue dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                      
                    </div>

                    <div className="mt-5 ml-9" onClick={handleClick}>
                      <Button text= " Sign in" />
                    </div>
                    <div >{error}</div>
                  </form>

                </div>

                {/* End */}

              </div>

            </div>
          </div>
          

        </div>
      );

}