import React from "react";

import InputItem from "../components/InputItem";

const Login = () => {

    const handleFormSubmit = async (event) => {
            event.preventDefault();

    };
    
    return (
        
        <main>
            <div>
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

export default Login;