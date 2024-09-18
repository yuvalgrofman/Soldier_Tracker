/** @format */

import { Button } from "bootstrap";


// import { React, useRef } from "react";
// import { getReformattedDate } from "../../../shared/userApi.js";



function SoldierTestProfile({ test, soldier }) {
    let results = "a"
    results = test.results;
    let resultId = 'a';
    // for (resultId in results) {

    // }
        
    const score = 5;


    return (
        <main className="container w-30 shadow mt-4 p-0 rounded-2" id="chat-app">
            <div className="card border-0 "> 
                <div className = "card-header d-flex flex-column align-items-center bg-light-gray">
                    <span className="d-flex justify-content-center w-100 h1 fw-bold">{test.name}</span>
                </div>

                <div class="container text-center d-flex mt-5 align-items-center flex-column bg-white">
                    <div class="row">
                        <div class="col">
                            <span>
                                <img src={soldier.profilePic} className="rounded-circle profile-picture-big" alt="avatar" />
                            </span>    
                        </div>
                        <div class="col">
                            <span className="d-flex w-100 name-box h1 fw-bold">
                                <div class="va">{soldier.name}</div>
                            </span>
                        </div>
                    </div>
                </div>

                <div class="col top-bot-margin-60">
                    <input type="text" className="font-size-240p form-control w-20 margin-40p center-text" value={score}></input>
                </div>

                <div class="container text-center">
                    <div class="row">
                    </div>
                    <div class="row">
                    <div class="col">
                            <button type="button" className="btn bg-light-purple darken-on-hover w-30 text-white fw-600 py-2 mb-4" >Save</button>
                        </div>
                    <div class="col">
                            <button type="button" className="btn bg-light-purple darken-on-hover w-30 text-white fw-600 py-2 mb-4" >Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default SoldierTestProfile;