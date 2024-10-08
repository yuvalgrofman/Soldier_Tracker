/** @format */

import SoldierStatus from "./SoldierStatus";
import '../TestStatus.css';
import { fetchTestResults, fetchSoldiers } from "../../general/API";
import { useEffect, useState } from "react";

function StatusList({ test, query }) {
    const [results, setResults] = useState([]);
    const [soldiers, setSoldiers] = useState([]);
    const [average, setAverage] = useState(0);
    const [max, setMax] = useState(0);
    const [min, setMin] = useState(100);

    useEffect(() => {
        fetchTestResults(test).then((fetchedResults) => {
            if (fetchedResults == null) {
                alert("Error fetching soldier results");
                return;
            }

            const soldierIDs = fetchedResults.map((result) => result.soldierID);
            fetchSoldiers(soldierIDs).then((fetchedSoldiers) => {
                if (fetchedSoldiers == null) {
                    alert("Error fetching soldiers");
                    return;
                }
                setSoldiers(fetchedSoldiers);

                let sum = 0;
                let count = 0;
                let maxScore = 0;
                let minScore = 100;

                fetchedResults.forEach((result) => {
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
    }, [test]);

    const soldierComponents = results.map((result) => {
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
    );
}

export default StatusList;
