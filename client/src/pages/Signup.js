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
                        <h1 class="title">SignUp to Get in the Fight!</h1>
                    </div>
                    <div class="field">
                        <label class="label">UserName</label>
                        <div class="control">
                            <input class="input is-medium" type="text" placeholder="PirateKing1"></input>
                        </div>
                    </div>
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
                            <button class="button">SignUp</button>
                        </div>
                    </div>
                    <div class="field has-text-centered">
                        <div class="control">
                            <p>Already a member? Please <a href="/login">LOGIN</a> to continue.</p>
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