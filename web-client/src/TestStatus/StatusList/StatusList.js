/** @format */

import SoldierStatus from "./SoldierStatus";
import '../TestStatus.css';
import { fetchTestResults, fetchSoldiers } from "../../general/API";
import { useEffect, useState } from "react";
import {
    fetchSectionSoldiers, fetchPlatoonSoldiers, fetchCompanySoldiers,
    fetchCompanyPlatoons, fetchPlatoonSections, fetchTestFailedBySoldier,
    fetchTestsFailedByUsers} from "../../general/API";
import { useNavigate, useParams } from "react-router-dom";

function StatusList({ test, query }) {
    const navigate = useNavigate();
    const { forceType, id } = useParams();

    const [results, setResults] = useState([]);
    const [effectiveResults, setEffectiveResults] = useState([]);
    const [soldiers, setSoldiers] = useState([]);
    const [average, setAverage] = useState(0);
    const [buttonNames, setButtonNames] = useState([]);
    const [buttonPages, setButtonPages] = useState([]);
    const [max, setMax] = useState(0);
    const [min, setMin] = useState(100);

    let linkPrefix = "/Test/" + test.link + "/";

    const fetchSubUnitsMap = {
        "Company": fetchCompanyPlatoons,
        "Platoon": fetchPlatoonSections
    }

    const subUnitsMap = {
        "Company": "Platoon",
        "Platoon": "Section"
    }

    const fetchForceSoldiersMap = {
        "Section" : fetchSectionSoldiers,
        "Platoon": fetchPlatoonSoldiers,
        "Company": fetchCompanySoldiers
    }

    useEffect(() => {
        fetchTestResults(test).then((fetchedResults) => {
            if (fetchedResults == null) {
                alert("Error fetching soldier results");
                return;
            }

            fetchForceSoldiersMap[forceType](id).then((fetchedSoldiers) => {
                if (fetchedSoldiers == null) {
                    alert("Error fetching soldiers");
                    return;
                }
                setSoldiers(fetchedSoldiers);

                let sum = 0;
                let count = 0;
                let maxScore = 0;
                let minScore = 100;

                let effectiveResults = fetchedResults.filter((result) => fetchedSoldiers.find((soldier) => soldier.armyID == result.soldierID));
                setEffectiveResults(effectiveResults);

                effectiveResults.forEach((result) => {
                    const score = result.score;
                    sum += score;
                    count++;
                    if (score > maxScore) {
                        maxScore = score;
                    }
                    if (score < minScore) {
                        minScore = score;
                    }
                });

                setMax(maxScore);
                setMin(minScore);
                setAverage(sum / count);
                setResults(fetchedResults);
            });
        });

        if (forceType === "Section") {
            return;
        }

        fetchSubUnitsMap[forceType](id).then((subUnits) => {
            let names = subUnits.map((subUnit) => (subUnit.name));
            let pages = subUnits.map((subUnit) => {
                return linkPrefix + subUnitsMap[forceType] + "/" + subUnit.objectId;
            });
            setButtonNames(names);
            setButtonPages(pages);

        });
    }, [forceType, id]);

    const soldierComponents = effectiveResults.map((result) => {
        if (query === "") {
            return (
                <SoldierStatus
                    key={result.soldierID}
                    soldier={soldiers.find((soldier) => soldier.armyID == result.soldierID)}
                    result={result}
                    test={test}
                />
            );
        }
        let soldier = soldiers.find((soldier) => soldier.armyID == result.soldierID);
        if (soldier.name.toLowerCase().includes(query.toLowerCase())) {
            return (
                <SoldierStatus
                    key={result.soldierID}
                    soldier={soldier}
                    result={result}
                    test={test}
                />
            );
        }
        return null;
    });

    return (
        <div>
            {
                forceType === "Section" ? null : 
                <div className="soldierlist-bar d-flex">
                    {buttonNames.map((name, index) => (
                        <div
                        key={index}
                        className="soldierlist-bar-item d-flex justify-content-center align-items-center"
                        onClick={() => navigate(buttonPages[index])}
                        >
                        {name}
                        </div>
                    ))}
                </div>
            }
            <div className="card-body p-3">
                {/* Stylized Grade Statistics */}
                <div className="grade-statistics d-flex justify-content-around py-3 px-4 mb-3">
                    <div className="stat-box d-flex align-items-center">
                        <span className="stat-title">Average Grade:</span>
                        <span className="stat-value ms-2">{average.toFixed(2)}</span>
                    </div>
                    <div className="stat-box d-flex align-items-center">
                        <span className="stat-title">Maximum Grade:</span>
                        <span className="stat-value ms-2">{max}</span>
                    </div>
                    <div className="stat-box d-flex align-items-center">
                        <span className="stat-title">Minimum Grade:</span>
                        <span className="stat-value ms-2">{min}</span>
                    </div>
                </div>

                <ul className="list-group list-group-flush overflow-auto" id="status-list">
                    {soldierComponents}
                </ul>
            </div>
        </div>
    );
}

export default StatusList;
