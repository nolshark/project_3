import React from "react";

import FlashPanel from "../components/FlashPanel";

const Login = () => {

    const handleFormSubmit = async (event) => {
            event.preventDefault();

    };
    
    return (
        
        <main>
            <div id="loginMain" class="columns is-vcentered">
                <div class="column" style={{ border: "2px solid black", }}>
                    <FlashPanel />
                </div>
                <form id="signForm" class="column" style={{ border: "2px solid blue", }}>
                    
                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input class="input is-medium" type="email" placeholder="example@eg.com"></input>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Password</label>
                        <div class="control">
                            <input class="input is-medium" type="password" placeholder="8 - 32 Characters"></input>
                        </div> 
                    </div>
                    <div class="field">
                        <div class="control">
                            <button class="button">Login</button>
                        </div>
                    </div>
                    <div class="field has-text-centered">
                        <div class="control">
                            <p>New to the Fight? <a href="/signup">SIGNUP</a> to get started.</p>
                        </div>
                    </div>
                </form>
                <div class="column" style={{ border: "2px solid black", }}>
                    <FlashPanel />
                </div>
            </div>
        </main>
    );
};

export default Login;