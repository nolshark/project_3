import React from "react";
import Header from "../components/Header";


const Stats = () => {

    
    return (
        <div>
            <Header />
            <main class="section columns" id="mainContainer" style={{paddingLeft: 0, paddingBottom: 10, }}>
                <form class="column section is-2" style={{ backgroundColor: "lightgray", }}>
                    <div class="field">
                        <label class="label">Search Fighter</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="Superman, Jackie Chan, etc..."></input>
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <button class="button">Search</button>
                        </div>
                    </div>
                    <label class="label">Narrow By Type</label>
                    <div class="field">
                        <div class="control">
                            <label class="checkbox">
                                <input type="checkbox"></input>
                                Assassin
                            </label>
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <label class="checkbox">
                                <input type="checkbox"></input>
                                Fighter
                            </label>
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <label class="checkbox">
                                <input type="checkbox"></input>
                                Martial Artist
                            </label>
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <label class="checkbox">
                                <input type="checkbox"></input>
                                Elemental
                            </label>
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <label class="checkbox">
                                <input type="checkbox"></input>
                                Supernatural
                            </label>
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <label class="checkbox">
                                <input type="checkbox"></input>
                                Summoner
                            </label>
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <label class="checkbox">
                                <input type="checkbox"></input>
                                Shapeshifter
                            </label>
                        </div>
                    </div>
                </form>
                <div class="column container is-5" style={{ maxWidth: "none", border: "2px solid black", }}>
                    <div class="">

                    </div>
                </div>
                <div class="column" style={{ maxWidth: "none", border: "2px solid black", borderLeft: 0,}}>

                </div>
            </main>
        </div>
    ); 
};

export default Stats;