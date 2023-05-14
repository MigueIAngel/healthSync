
import '../css/userView.css'
//import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import NavLogin from "./navBarLogin";
import Button from './Buttons_HS';

export default function UserViewP() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    
    return (
        <div className="parent-user overflow-x-hidden">
            <NavLogin/>
            {/* <h1 className="text-8xl font-bold underline">
                Hello world!
            </h1> */}
            <div onClick={() => setOpen(!open)} className='flex w-full justify-center  mt-8'>
                <Button  text="Add"  />
            </div>

            <section>
                <div class={`flex h-screen bg-white items-center justify-center  mt-32 mb-32 ${open ? "" : "hidden"}`}>
                    
                    <div class="grid bg-sky-100 rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
                        <div class="flex justify-center py-4">
                        <div class="flex bg-nav-blue rounded-full md:p-4 p-2 border-2 border-nav-blue">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                        </div>
                        </div>

                        <div class="flex justify-center">
                        <div class="flex">
                            <h1 class="text-gray-600 font-bold md:text-2xl text-xl">Book your next appointment with ease</h1>
                        </div>
                        </div>
                        <form action="">
                            <div class="grid grid-cols-1 mt-5 mx-7">
                            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Name</label>
                            <input class="py-2 px-3 rounded-lg border-2 border-nav-blue mt-1 focus:outline-none focus:ring-2 focus:ring-nav-blue focus:border-transparent" type="text" placeholder="Input 1" />
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                            <div class="grid grid-cols-1">
                                <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Genre</label>
                                <input class="py-2 px-3 rounded-lg border-2 border-nav-blue mt-1 focus:outline-none focus:ring-2 focus:ring-nav-blue focus:border-transparent" type="text" placeholder="Input 2" />
                            </div>
                            <div class="grid grid-cols-1">
                                <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Age</label>
                                <input class="py-2 px-3 rounded-lg border-2 border-nav-blue mt-1 focus:outline-none focus:ring-2 focus:ring-nav-blue focus:border-transparent" type="text" placeholder="Input 3" />
                            </div>
                            </div>

                            <div class="grid grid-cols-1 mt-5 mx-7">
                            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Medical Center</label>
                            <select class="py-2 px-3 rounded-lg border-2 border-nav-blue mt-1 focus:outline-none focus:ring-2 focus:ring-nav-blue focus:border-transparent">
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>
                            </div>

                            <div class="grid grid-cols-1 mt-5 mx-7">
                                <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Schedule</label>
                                <select class="py-2 px-3 rounded-lg border-2 border-nav-blue mt-1 focus:outline-none focus:ring-2 focus:ring-nav-blue focus:border-transparent">
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </div>

                            <div class="grid grid-cols-1 mt-5 mx-7">
                            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">#</label>
                            <input class="py-2 px-3 rounded-lg border-2 border-nav-blue mt-1 focus:outline-none focus:ring-2 focus:ring-nav-blue focus:border-transparent" type="text" placeholder="Another Input" />
                            </div>

                            <div class="grid grid-cols-1 mt-5 mx-7">
                            <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">Medical Record</label>
                                <div class='flex items-center justify-center w-full'>
                                    <label class='flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-nav-blue group'>
                                        <div class='flex flex-col items-center justify-center pt-7'>
                                        <svg class="w-10 h-10 text-nav-blue group-hover:text-nav-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                        <p class='lowercase text-sm text-gray-400 group-hover:text-nav-blue pt-1 tracking-wider'>Select a photo</p>
                                        </div>
                                    <input type='file' class="hidden" />
                                    </label>
                                </div>
                            </div>

                            <div class='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
                            <button class='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>Cancel</button>
                            <button class='w-auto bg-nav-blue hover:bg-nav-blue rounded-lg shadow-xl font-medium text-white px-4 py-2'>Create</button>
                            </div>
                        </form>

                    </div>
                    
                </div>
            </section>
            <div className="parent-son flex justify-center items-center h-screen w-screen overflow-x-scroll">
                <div className="container-user ">

                    <div className="flex flex-row bg-white items-center">
                        <div className="app-bg-blue-1 px-10 py-5">
                            <span className="text-lg text-white font-bold"> Health Sync</span>
                        </div>
                        <div className="flex flex-row pl-5 items-center">
                            <div className="h-9 w-9 bg-cyan-400 border-solid border-4 border-blue-600 rounded-xl">
                                { /*something */}
                            </div>
                            <div className="flex flex-col pl-5">
                                <span className="font-semibold text-sm app-color-black">
                                    Mateo Aristizabal
                                </span>
                                {/* <span className="font-semibold text-xs app-color-gray-1">
                                    Oral Health
                                </span> */}
                            </div>
                            <svg className="w-4 h-4 app-color-blue-3 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                            <div className="w-px bg-gray-100 h-10 ml-5"></div>
                        </div>
                        <div className="flex flex-row pl-5 items-center mr-auto">
                            <div className="h-9 w-9 app-bg-blue-2 flex justify-center items-center rounded-xl">
                                <svg class="w-6 h-6 app-color-blue-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                            </div>
                            <div className="flex flex-col pl-5"> 
                                <span className="font-semibold text-sm app-color-black">
                                    Today
                                </span>
                                <span className="font-semibold text-sm app-color-blue-1">
                                    31/03/2023
                                </span>
                            </div>
                            <svg className="w-4 h-4 app-color-blue-3 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                            <div className="w-px bg-gray-100 h-10 ml-5"></div>
                            
                        </div>
                        <button className="app-color-blue-1 font-semibold text-md app-button-shadow w-40 py-2 rounded-3xl mr-5">Appointments</button>
                        {/* <button className="app-color-blue-1 font-semibold text-md app-button-shadow w-40 py-2 rounded-3xl mr-5" onClick={() => { navigate("/user"); }}>Doc View</button> */}
                        <svg class="w-6 h-6 app-color-blue-3 mr-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </div>

                    <div className="flex flex-col app-bg-white-1 px-12 pb-10">
                        <div className="flex flex-row  py-5">
                            <span className="text-lg font-bold app-color-black">
                                Book your next appointment with ease
                            </span>
                        </div>
                        <div className="flex flex-row">
                            <div className="flex flex-col w-40 bg-white pl-5 py-3 rounded-tl-2xl rounded-tr-2xl bg-white active">
                                <span className="text-3xl app-color-blue-1 font-bold">06</span>
                                <span className="text-md app-color-blue-1 font-semibold">Appointment List</span>
                            </div>
                        </div>
                        <div className="flex flex-row bg-white p-10">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>

                                    <th className="text-left text-xs app-color-black pb-5">Appointments</th>
                                    <th className="text-left text-xs app-color-black pb-5">Contact</th>
                                    <th className="text-left text-xs app-color-black pb-5">Check In</th>
                                    <th className="text-left text-xs app-color-black pb-5">Waited</th>

                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="app-border-1">
                                    <td>
                                        <svg className="w-6 h-6 app-color-blue-3 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"></path></svg>
                                    </td>

                                    <td>
                                        <div className="flex justify-center items-center rounded-md w-8 h-8 app-bg-yellow-2 app-color-yellow-1 text-lg font-semibold" >
                                            1
                                        </div>
                                    </td>

                                    <td>
                                        <div className="flex flex-row py-3" >
                                            <div className="mr-5 w-10 h-10 bg-gray-100 rounded-full"></div>
                                            <div className="flex flex-col">
                                                <span className="font-semibold text-sm app-color-black">
                                                    Clinical laboratory
                                                </span>
                                                <span className="font-semibold text-sx app-color-gray-1">
                                                    Instituto De La Visión Del Norte
                                                </span>
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        <span className="font-semibold text-sm app-color-gray-1">
                                            333323232
                                        </span>
                                    </td>

                                    <td>
                                        <span className="font-semibold text-sm app-color-gray-1">
                                            5:10 PM
                                        </span>
                                    </td>

                                    <td>
                                        <div className="app-bg-red-2 h-8 w-28 font-semibold text-sm flex justify-center items-center app-color-red-1 rounded-md">
                                            56 mins
                                        </div>
                                    </td>

                                    <td>
                                        <button class="flex items-center justify-center app-button-shadow w-32 py-2 rounded-3xl" onClick={() => { navigate("/vitals"); }}>
                                            <svg class="w-6 h-6 app-color-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
                                            <span class="ml-3 font-semibold text-md app-color-gray-1">Vitals</span>
                                        </button>
                                    </td>

                                    <td>
                                        <svg class="w-6 h-6 app-color-blue-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>

                                    </td>

                                </tr>

                                <tr className="app-border-1">
                                    <td className="w-6 h-6">
                                        <svg className="w-6 h-6 app-color-blue-3 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"></path></svg>
                                    </td>

                                    <td>
                                        <div className="flex justify-center items-center rounded-md w-8 h-8 app-bg-blue-2 app-color-blue-1 text-lg font-semibold" >
                                            2
                                        </div>
                                    </td>

                                    <td>
                                        <div className="flex flex-row py-3" >
                                            <div className="mr-5 w-10 h-10 bg-gray-100 rounded-full"></div>
                                            <div className="flex flex-col">
                                                <span className="font-semibold text-sm app-color-black">
                                                    Appointment
                                                </span>
                                                <span className="font-semibold text-sx app-color-gray-1">
                                                    Instituto De La Visión Del Norte
                                                </span>
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        <span className="font-semibold text-sm app-color-gray-1">
                                            3808508754
                                        </span>
                                    </td>

                                    <td>
                                        <span className="font-semibold text-sm app-color-gray-1">
                                            5:10 PM
                                        </span>
                                    </td>

                                    <td>
                                        <div className="app-bg-red-2 h-8 w-28 font-semibold text-sm flex justify-center items-center app-color-red-1 rounded-md">
                                            56 mins
                                        </div>
                                    </td>

                                    <td>
                                        <button class="flex items-center justify-center app-button-shadow w-32 py-2 rounded-3xl" onClick={() => { navigate("/vitals"); }}>
                                            <svg class="w-6 h-6 app-color-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
                                            <span class="ml-3 font-semibold text-md app-color-gray-1">Vitals</span>
                                        </button>
                                    </td>
                                    
                                    <td>
                                        <svg class="w-6 h-6 app-color-blue-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>

                                    </td>

                                </tr>

                                <tr className="app-border-1">
                                    <td className="w-6 h-6">
                                        <svg className="w-6 h-6 app-color-blue-3 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"></path></svg>
                                    </td>

                                    <td>
                                        <div className="flex justify-center items-center rounded-md w-8 h-8 app-bg-yellow-2 app-color-yellow-1 text-lg font-semibold" >
                                            3
                                        </div>
                                    </td>

                                    <td>
                                        <div className="flex flex-row py-3" >
                                            <div className="mr-5 w-10 h-10 bg-gray-100 rounded-full"></div>
                                            <div className="flex flex-col">
                                                <span className="font-semibold text-sm app-color-black">
                                                    Surgery
                                                </span>
                                                <span className="font-semibold text-sx app-color-gray-1">
                                                    Instituto De La Visión Del Norte
                                                </span>
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        <span className="font-semibold text-sm app-color-gray-1">
                                            3808508754
                                        </span>
                                    </td>

                                    <td>
                                        <span className="font-semibold text-sm app-color-gray-1">
                                            5:10 PM
                                        </span>
                                    </td>

                                    <td>
                                        <div className="app-bg-red-2 h-8 w-28 font-semibold text-sm flex justify-center items-center app-color-red-1 rounded-md">
                                            56 mins
                                        </div>
                                    </td>

                                    <td>
                                        <button class="flex items-center justify-center app-button-shadow w-32 py-2 rounded-3xl" onClick={() => { navigate("/vitals"); }}>
                                            <svg class="w-6 h-6 app-color-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
                                            <span class="ml-3 font-semibold text-md app-color-gray-1">Vitals</span>
                                        </button>
                                    </td>
                                    
                                    <td>
                                        <svg class="w-6 h-6 app-color-blue-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>

                                    </td>

                                </tr>

                                <tr className="app-border-1">
                                    <td className="w-6 h-6">
                                        <svg className="w-6 h-6 app-color-blue-3 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"></path></svg>
                                    </td>

                                    <td>
                                        <div className="flex justify-center items-center rounded-md w-8 h-8 app-bg-blue-2 app-color-blue-1 text-lg font-semibold" >
                                            4
                                        </div>
                                    </td>

                                    <td>
                                        <div className="flex flex-row py-3" >
                                            <div className="mr-5 w-10 h-10 bg-gray-100 rounded-full"></div>
                                            <div className="flex flex-col">
                                                <span className="font-semibold text-sm app-color-black">
                                                    Surgery
                                                </span>
                                                <span className="font-semibold text-sx app-color-gray-1">
                                                    Health & Beauty Solutions
                                                </span>
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        <span className="font-semibold text-sm app-color-gray-1">
                                            3808508754
                                        </span>
                                    </td>

                                    <td>
                                        <span className="font-semibold text-sm app-color-gray-1">
                                            5:10 PM
                                        </span>
                                    </td>

                                    <td>
                                        <div className="app-bg-red-2 h-8 w-28 font-semibold text-sm flex justify-center items-center app-color-red-1 rounded-md">
                                            56 mins
                                        </div>
                                    </td>

                                    <td>
                                        <button class="flex items-center justify-center app-button-shadow w-32 py-2 rounded-3xl" onClick={() => { navigate("/vitals"); }}>
                                            <svg class="w-6 h-6 app-color-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
                                            <span class="ml-3 font-semibold text-md app-color-gray-1">Vitals</span>
                                        </button>
                                    </td>
                                    
                                    <td>
                                        <svg class="w-6 h-6 app-color-blue-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>

                                    </td>

                                </tr>

                                <tr className="app-border-1">
                                    <td className="w-6 h-6">
                                        <svg className="w-6 h-6 app-color-blue-3 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"></path></svg>
                                    </td>

                                    <td>
                                        <div className="flex justify-center items-center rounded-md w-8 h-8 app-bg-yellow-2 app-color-yellow-1 text-lg font-semibold" >
                                            5
                                        </div>
                                    </td>

                                    <td>
                                        <div className="flex flex-row py-3" >
                                            <div className="mr-5 w-10 h-10 bg-gray-100 rounded-full"></div>
                                            <div className="flex flex-col">
                                                <span className="font-semibold text-sm app-color-black">
                                                    Appointment
                                                </span>
                                                <span className="font-semibold text-sx app-color-gray-1">
                                                    Vascular Center
                                                </span>
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        <span className="font-semibold text-sm app-color-gray-1">
                                            3808508754
                                        </span>
                                    </td>

                                    <td>
                                        <span className="font-semibold text-sm app-color-gray-1">
                                            5:10 PM
                                        </span>
                                    </td>

                                    <td>
                                        <div className="app-bg-red-2 h-8 w-28 font-semibold text-sm flex justify-center items-center app-color-red-1 rounded-md">
                                            56 mins
                                        </div>
                                    </td>

                                    <td>
                                        <button class="flex items-center justify-center app-button-shadow w-32 py-2 rounded-3xl" onClick={() => { navigate("/vitals"); }}>
                                            <svg class="w-6 h-6 app-color-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
                                            <span class="ml-3 font-semibold text-md app-color-gray-1">Vitals</span>
                                        </button>
                                    </td>
                                    
                                    <td>
                                        <svg class="w-6 h-6 app-color-blue-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>

                                    </td>

                                </tr>

                                <tr className="app-border-1">
                                    <td className="w-6 h-6">
                                        <svg className="w-6 h-6 app-color-blue-3 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"></path></svg>
                                    </td>

                                    <td>
                                        <div className="flex justify-center items-center rounded-md w-8 h-8 app-bg-blue-2 app-color-blue-1 text-lg font-semibold" >
                                            6
                                        </div>
                                    </td>

                                    <td>
                                        <div className="flex flex-row py-3" >
                                            <div className="mr-5 w-10 h-10 bg-gray-100 rounded-full"></div>
                                            <div className="flex flex-col">
                                                <span className="font-semibold text-sm app-color-black">
                                                    Surgery
                                                </span>
                                                <span className="font-semibold text-sx app-color-gray-1">
                                                    Vascular Center
                                                </span>
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        <span className="font-semibold text-sm app-color-gray-1">
                                            3808508754
                                        </span>
                                    </td>

                                    <td>
                                        <span className="font-semibold text-sm app-color-gray-1">
                                            5:10 PM
                                        </span>
                                    </td>

                                    <td>
                                        <div className="app-bg-blue-2 h-8 w-28 font-semibold text-sm flex justify-center items-center app-color-blue-1 rounded-md">
                                            Not Arrived
                                        </div>
                                    </td>

                                    <td>
                                        <button class="flex items-center justify-center app-button-shadow w-32 py-2 rounded-3xl" onClick={() => { navigate("/vitals"); }}>
                                            <svg class="w-6 h-6 app-color-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
                                            <span class="ml-3 font-semibold text-md app-color-gray-1">Vitals</span>
                                        </button>
                                    </td>
                                    
                                    <td>
                                        <svg class="w-6 h-6 app-color-blue-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>

                                    </td>

                                </tr>

                            </tbody>
                        </table>
                    </div>
                    </div>

                    

                </div>
            </div>
        </div>
    )
  }