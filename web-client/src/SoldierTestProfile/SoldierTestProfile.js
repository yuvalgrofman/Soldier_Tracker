/** @format */

import { useEffect, useState } from "react";
import {
    fetchSoldier,
    fetchTest,
    fetchResultByTestAndSoldier,
    fetchTestName,
    postUpdateResult,
    updateSoldiersException
} from "../general/API";
import placeholder from "../images/placeholder.png"
import {useNavigate, useParams} from "react-router-dom";
import alert from "bootstrap/js/src/alert";


function saveFunc(test, testLink, soldierID, score) {

    let format_to_lambda = {
        "HIGH": (a,b) => a >= b,
        "LOW": (a,b) => a <= b
    }
    let status;
    if (test.type in format_to_lambda) {
        let cmp = format_to_lambda[test.type]

        if (cmp(result.score, test.excellent)) {
            status = "EXCELLENT";
        } else if (cmp(result.score, test.pass)) {
            status = "PASSED";
        } else {
            status = "FAILED";
        }
    }

    postUpdateResult(testLink, soldierID, score, status).then((response) => {
        if (response == null) {
            window.alert("Error saving result");
        }
    });

    if (status == "FAILED") {
        updateSoldiersException(soldierID, true).then((response) => {
            if (response == null) {
                window.alert("Error saving result");
            }
        });
    }
}

function SoldierTestProfile() {
    const navigate = useNavigate();
    const { testLink, soldierID } = useParams();

    const [soldier, setSoldier] = useState({
        name: null,
        profilePic : placeholder
    });

    const [score, setScore] = useState(0);
    const [testName, setTestName] = useState("");
    const [test, setTest] = useState({})

    useEffect(() => {
        fetchSoldier(soldierID).then((fetchedSoldier) => {
            if (fetchedSoldier == null) {
                alert("Error fetching soldier");
                return;
            }
            fetchResultByTestAndSoldier(testLink, soldierID).then((fetchedResult) => {
                if (fetchedResult == null) {
                    alert("Error fetching result");
                    return;
                }

                fetchTest(testLink).then((fetchedTest) => {
                    if (fetchedTest.name == null) {
                        alert("Error fetching test name");
                        return;
                    }

                    setTest(fetchedTest)
                    setTestName(fetchedTest.name);
                    setScore(fetchedResult.score);
                    setSoldier(fetchedSoldier);
                })
            })
        })
    }, [soldierID, testLink])

    return (
        <main className="container-sm w-80 shadow mt-4 p-0 rounded-2">
            <div className="card border-0 title-bar"> 
                <div className = "card-header d-flex flex-column align-items-center bg-light-gray title-bar">
                    <span className="d-flex justify-content-center w-100 h1 fw-bold">{testName}</span>
                </div>

                <div className="container text-center d-flex mt-5 h-200 align-items-center flex-column bg-white">
                    <div className="row">
                        <div className="col">
                            <span>
                                <img src={soldier.profilePic ? soldier.profilePic : "defImg"} className="rounded-circle profile-picture-big" alt="avatar" />
                            </span>    
                        </div>
                        <div className="col">
                            <span className="d-flex w-100 name-box h1 fw-bold">
                                <div className="va">{soldier.name}</div>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="col top-bot-margin-60">
                    <input
                        type="text"
                        value={score}
                        className="font-size-240p form-control w-70 margin-15p center-text"
                        onChange={ ev => setScore(ev.target.value) }
                    ></input>
                </div>

                <div className="container text-center">
                    <div className="row">
                    </div>
                    <div className="row">
                    <div className="col">
                            <button
                                type="button"
                                className="btn bg-dark-red darken-on-hover w-80 text-white fw-600 py-2 mb-4"
                                onClick={ () => saveFunc(test, testLink, soldierID, score) }
                            >Save</button>
                        </div>
                    <div className="col">
                            <button
                                type="button"
                                onClick={() => navigate(-1)}
                                className="btn bg-dark-red darken-on-hover w-80 text-white fw-600 py-2 mb-4"
                            >Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default SoldierTestProfile;
