import React from "react";
import Header from "../components/Header";



const Stats = () => {

    
    return (
        <div>
            <Header />
            <main class="section columns" id="mainContainer">
                <div class="column " style={{ maxWidth: "none", border: "2px solid black", }}>

                </div>
                <div class="column is-narrow" style={{ maxWidth: "none", border: "2px solid black", }}>
                    <div class="container has-text-centered">
                        <div>
                            <button class="button">Vote Left</button>
                        </div>
                        <div>
                            <h1 class="title">VS</h1>
                        </div>
                        <div>
                            <button class="button">Vote Right</button>
                        </div>
                    </div>
                </div>
                <div class="column " style={{ maxWidth: "none", border: "2px solid black", }}>
                    
                </div>
            </main>
        </div>
    );
};

export default Stats;