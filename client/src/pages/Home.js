import React from "react";
import Header from "../components/Header";


const Home = () => {

    
    return (
        <div>
            <Header />
            <main class="section columns" id="mainContainer" style={{paddingLeft: 0, }}>
                <div class="column container is-one-fifth" style={{ backgroundColor: "lightgray", }}>
                    <h1 class="title">This is the HomePage</h1>
                </div>
                <div class="column container" style={{ border: "2px solid black", maxWidth: "none", }}>

                </div>
            </main>
        </div>
    );
};

export default Home;