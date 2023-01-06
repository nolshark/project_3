import React from "react";

import InputItem from "../components/InputItem";

const Signup = () => {

    const handleFormSubmit = async (event) => {
            event.preventDefault();

    };
    
    return (
        
        <main>
            <div>
                <div>
                    <input is-medium type="text" placeholder="Username"></input>
                </div>
                <div>
                    <input is-medium type="email" placeholder="Email"></input>
                </div>
                <div>
                <input is-medium type="password" placeholder="Password"></input>
                </div>
            </div>
        </main>
    );
};

export default Signup;