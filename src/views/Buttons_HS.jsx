import React from "react";

const Button = ({ text}) => {
    return(
        <button className="bg-sky-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-white hover:text-nav-blue transition duration-500 ease-in-out  lg:mr-4 ">
            { text }
        </button>
    )
}

export default Button;