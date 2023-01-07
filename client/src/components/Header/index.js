import React from "react";
import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";

const Header  = () => {
    let location = useLocation();

    return (
        <header class="columns is-centered is-full">
            <>
            {
                location.pathname !== '/login' && location.pathname !== 'signup' && NavBar 
            }
            </>
        </header>
    );
};

export default Header;