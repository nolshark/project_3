import React from "react";
import Header from "../components/Header";


const Stats = () => {

    
    return (
        <div>
            <Header />
            <main class="section columns" id="mainContainer" style={{paddingLeft: 0, paddingBottom: 10, }}>
                <form class="column container is-2" style={{ backgroundColor: "lightgray", }}>
                    
                    <div class="column">
                        <button class="button is-large is-fullwidth">My Match-Ups</button>
                    </div>
                    
                </form>
                <div class="column container" style={{ maxWidth: "none", }}>
                    <div class="">

                    </div>
                </div>
            </main>
        </div>
    ); 
};

export default Stats;