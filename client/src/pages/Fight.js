import React from "react";
import Header from "../components/Header";



const Stats = () => {

    
    return (
        <div>
            <Header />
            <main>
                <div>
                    <h1>This is where the Action Happens</h1>
                </div>
                <div>
                    <div>
                        <h2>Character 1</h2>
                        <button>WINNER</button>
                    </div>
                </div>
                <div>
                    <h1>VS</h1>
                </div>
                <div>
                    <div>
                        <h2>Character 2</h2>
                        <button>WINNER</button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Stats;