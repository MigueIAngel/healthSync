
import React from "react";
import { useNavigate } from "react-router-dom";

import NavHome from "./navBarHome";
import {motion} from 'framer-motion'
import Button from "./Buttons_HS";
//import Button from "./Buttons_HS";
import {fadeIn} from "../variants.js"


import '../css/globals.css'

const services = [

  {
    name:"Appointments",
    description: 'allows patients to easily book appointments with healthcare providers such as doctors, dentists, or therapists.'
  },

  {
    name:"Appointments",
    description: 'allows patients to easily book appointments with healthcare providers such as doctors, dentists, or therapists.'
  },

  {
    name:"Appointments",
    description: 'allows patients to easily book appointments with healthcare providers such as doctors, dentists, or therapists.'
  },

 


]





export default function AboutUs() {
    const navigate = useNavigate();


    

    return (
        <div className="relative h-screen w-full bg-[url('/src/img/bg_oficial.png')] bg-no-repeat bg-center bg-fixed bg-cover overflow-y-visible md:overflow-y-hidden">

          <NavHome/>
          <div className="bg-white w-full h-full lg:bg-opacity-0 " >
            <div>
              <div className="container mx-auto ">
                <div className="flex flex-col lg:flex-row">
                    <div className="flex-1 mb-12 lg:mb-0">
                      <h2 className="md:text-5xl text-2xl text-nav-blue font-semibold py-5 mb-6">Health Sinc</h2>
                      <h3 className="text-lg text-justify font-medium text-gray-700 max-w-[455px] mb-16">
                        Our healthcare appointment app is a convenient and easy-to-use platform that connects patients with healthcare providers in their area.
                        With just a few clicks, patients can search for doctors, clinics, and hospitals, view their availability, 
                        and book appointments online. Our app is designed to streamline the appointment scheduling process and provide
                        patients with access to high-quality medical care.
                      </h3>

                      <div className="mt-5" onClick={() => { navigate("/login"); }}>
                        <Button text ="Get Started"/>
                      </div>
                    </div>

                  <div className="mt-1 flex-1">

                    <div>
                      {services.map((service, index) => {

                        const {name, description, } = service;
                        return(
                          <div className=" h-[146px] mb-[10px]" key = {index}>
                            <div className="md:text-3xl text-2xl text-nav-blue font-semibold py-5 mb-4">
                              <h4>{name}</h4>
                            </div>
                            <div className="text-lg text-justify font-medium text-gray-700">
                              {description}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                    
                  </div>
                </div>

              </div>
            </div>
            
          </div>

          
          

        </div>
      );

}