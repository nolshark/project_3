import React from "react";

import InputItem from "../components/InputItem";
import InputBox from "../components/InputBox";
import FlashPanel from "../components/FlashPanel";

const Signup = () => {

    const handleFormSubmit = async (event) => {
            event.preventDefault();

    };
    
    return (
        
        <main>
            <div id="signMain" class="columns is-vcentered">
                <div class="column" style={{ border: "2px solid black", }}>
                    <FlashPanel />
                </div>
                <form id="signForm" class="column" style={{ border: "2px solid blue", }}>
                    <div class="field container has-text-centered">
                        <h1 class="title">Tournament Registration</h1>
                    </div>
                    <div class="field">
                        <label class="label">Username</label>
                        <div>
                            <input class="input is-medium" type="text" placeholder="PirateKing1"></input>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Email</label>
                        <div>
                            <input class="input is-medium" type="email" placeholder="example@eg.com"></input>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Password</label>
                        <div>
                            <input class="input is-medium" type="password" placeholder="8 - 32 Characters"></input>
                        </div> 
                    </div>
                    <div class="field">
                        <div class="control">
                            <button class="button">Sign-Up</button>
                        </div>
                    </div>
                    <div class="field has-text-centered">
                        <div class="control">
                            <p>Already signed up? <a href="/login">LOGIN</a> to enter the Arena.</p>
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

export default Signup;