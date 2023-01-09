import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

import FlashPanel from "../components/FlashPanel";

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
            event.preventDefault();
            console.log(formState);
            try {
                const { data } = await login({
                    variables: { ...formState },
                });

                Auth.login(data.login.token);
            } catch (e) {
                console.error(e);
            }

            setFormState({
                email: '',
                password: '',
            });
    };
    
    return (
        
        <main>
            <div id="loginMain" class="columns is-vcentered">
                <div class="column" style={{ border: "2px solid black", }}>
                    <FlashPanel />
                </div>
                <form id="signForm" class="column" style={{ border: "2px solid blue", }} onSubmit={handleFormSubmit}>
                    
                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input
                             class="input is-medium" 
                             type="email" 
                             placeholder="example@eg.com"
                             value={formState.email}
                             onChange={handleChange} 
                             />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Password</label>
                        <div class="control">
                            <input
                             class="input is-medium" 
                             type="password" 
                             placeholder="8 - 32 Characters"
                             value={formState.password}
                             onChange={handleChange} 
                             />
                        </div> 
                    </div>
                    <div class="field">
                        <div class="control">
                            <button 
                            class="button"
                            type="submit"
                            >
                                Login
                            </button>
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

                {error && (
                    <div>
                        { error.message }
                    </div>
                )}
            </div>
        </main>
    );
};

export default Login;