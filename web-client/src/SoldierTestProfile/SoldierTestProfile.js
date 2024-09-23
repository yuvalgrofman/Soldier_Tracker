/** @format */

import { useEffect, useState } from "react";
import { fetchSoldier, fetchTest, fetchResult, fetchResultByTestAndSoldier, postResult } from "../general/API";
import placeholder from "../images/placeholder.png" 


function saveFunc(testName, soldierID, score) {
    postResult(testName, soldierID, score).then((response) => {
        if (response == null) {
            alert("Error saving result");
            return;
        }
    });
}

function SoldierTestProfile({ testName, soldierID }) {
    const [soldier, setSoldier] = useState({
        name: null,
        profilePic : placeholder
    });

    const [score, setScore] = useState(0);

    useEffect(() => {
        fetchSoldier(soldierID).then((fetchedSoldier) => {
            if (soldier == null) {
                alert("Error fetching soldier");
                return;
            }
            setSoldier(fetchedSoldier)
            fetchResultByTestAndSoldier(testName, soldierID).then((fetchedResult) => {
                setScore(fetchedResult.score);
            })
        })
    })


    return (
        <main className="container w-30 shadow mt-4 p-0 rounded-2" id="chat-app">
            <div className="card border-0 "> 
                <div className = "card-header d-flex flex-column align-items-center bg-light-gray">
                    <span className="d-flex justify-content-center w-100 h1 fw-bold">{testName}</span>
                </div>

                <div class="container text-center d-flex mt-5 align-items-center flex-column bg-white">
                    <div class="row">
                        <div class="col">
                            <span>
                                <img src={soldier.profilePic ? soldier.profilePic : defImg} className="rounded-circle profile-picture-big" alt="avatar" />
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
                    <input
                        type="text"
                        className="font-size-240p form-control w-20 margin-40p center-text"
                        value={score}
                        onChange={ ev => setScore(ev.target.value) }
                    ></input>
                </div>

                <div class="container text-center">
                    <div class="row">
                    </div>
                    <div class="row">
                    <div class="col">
                            <button
                                type="button"
                                className="btn bg-light-purple darken-on-hover w-30 text-white fw-600 py-2 mb-4"
                                onClick={ saveFunc(testName, soldierID, score) }
                            >Save</button>
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
