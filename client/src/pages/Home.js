import React from "react";
import Header from "../components/Header";


const Home = () => {

    
    return (
        <div>
            <Header />
            <main class="section columns" id="mainContainer" style={{paddingLeft: 0, paddingBottom: 10, }}>
                <div class="column container is-one-fifth" style={{ backgroundColor: "lightgray", }}>
                    <div class="column">
                        <button class="button is-large is-fullwidth">My Match-Ups</button>
                    </div>
                </div>
                <div class="column container" style={{ maxWidth: "none", }}>
                    <div class="">

                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;