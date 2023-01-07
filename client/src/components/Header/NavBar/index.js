import React from "react";
import { Link } from "react-router-dom";

const NavBar  = () => {

    return (
        <div style={{ width: 100 + '%', paddingTop: 20, paddingLeft: 20, paddingRight: 20 }}>
            <nav class="navbar is-transparent" role="navigation" aria-label="main-navigation">
                <div class="navbar-brand">
                    <h1 class="title">MIGHT CLUB</h1>
                </div>

                <div class="navbar-menu">
                    <div class="navbar-start">
                        <div class="navbar-item">
                            <Link to="/fight">
                                FIGHT
                            </Link>
                        </div>
                        <div class="navbar-item">
                            <Link to="/">
                                Home
                            </Link>
                        </div>
                        <div class="navbar-item">
                            <Link to="/stats">
                                Stats
                            </Link>
                        </div>
                    </div>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <button>LogOut</button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar; 