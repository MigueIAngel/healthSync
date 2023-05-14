import React from "react";

const NavLinks = () => {

    const links= [

        {name: "Services"},
        {name: "Contact Us"},
        {name: "Support"}

    ];

    return(
        <>

            {
                links.map(link => (
                    <div>
                        <div className="px-3 text-left cursor-pointer">
                           <h1 className="py-7">{link.name}</h1> 
                        </div>
                    </div>
                ))
            }
           
        </>
    )
}

export default NavLinks;