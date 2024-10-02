/** @format */

import SoldierListElement from "./SoldierListElement";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    fetchSectionSoldiers, fetchPlatoonSoldiers, fetchCompanySoldiers,
    fetchCompanyPlatoons, fetchPlatoonSections, fetchTestFailedBySoldier,
    fetchTestsFailedByUsers} from "../general/API";

import { useNavigate } from "react-router-dom";
import "./SoldierList.css"
import SearchBar from "../general/SearchBar";

function SoldierList({ exception }) {
    const navigate = useNavigate();
    const { forceType, id } = useParams();

    const [soldiers, setSoldiers] = useState([]);
    const [title, setTitle] = useState("");
    const [buttonNames, setButtonNames] = useState([]);
    const [buttonPages, setButtonPages] = useState([]);
    const [query, setQuery] = useState("");
    const [testFails, setTestFails] = useState({});

    let linkPrefix = exception ? "/Exceptions/" : "/Soldiers/";

    const fetchSubUnitsMap = {
        "Company": fetchCompanyPlatoons,
        "Platoon": fetchPlatoonSections
    }

    const subUnitsMap = {
        "Company": "Platoon",
        "Platoon": "Section"
    }

    useEffect(() => {
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

    const fetchForceSoldiersMap = {
        "Section" : fetchSectionSoldiers,
        "Platoon": fetchPlatoonSoldiers,
        "Company": fetchCompanySoldiers
    }

    useEffect(() => {
        fetchForceSoldiersMap[forceType](id).then((fetchedSoldiers) => {
            let title = "";
            if (forceType === "Section") {
                title = "Company " + fetchedSoldiers[0].company + " -  Platoon " + fetchedSoldiers[0].platoon + " - Section " + fetchedSoldiers[0].section;
            } else if (forceType === "Platoon") {
                title = "Company " + fetchedSoldiers[0].company + " -  Platoon " + fetchedSoldiers[0].platoon;
            } else {
                title = "Company " + fetchedSoldiers[0].company;
            }

            let armyIDs = fetchedSoldiers.map((soldier) => (soldier.armyID));
            fetchTestsFailedByUsers(armyIDs).then((fetchedTestFails) => {
                setTestFails(fetchedTestFails);
                setTitle(title);
                setSoldiers(fetchedSoldiers);
            });
        });
    }, [forceType, id]);

    const isException = (soldier) => {
        return testFails[soldier.armyID] != null;
    }
    
    const soldierComponents = soldiers.map((soldier) => {
        if (query !== "" && !soldier.name.toLowerCase().includes(query.toLowerCase()))
            return null;

        if (exception && isException(soldier)) {
            let testFailed = testFails[soldier.armyID][0];
            return <SoldierListElement soldier={soldier} testFailed={testFailed} />;
        } else if (exception)
            return null;

        return (<SoldierListElement soldier={soldier} />);
    });
        
    return (
        <main className="container-sm w-80 shadow mt-4 p-0 rounded-4">
            <div className = "card-header d-flex flex-column align-items-center bg-light-gray title-bar">
                <span className="d-flex justify-content-center w-100 fw-bold">{title}</span>
            </div>
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
            <SearchBar doSearch={setQuery} />
            <div className="card border-0 soldier-list-body"> 
                <div className = "card-body p-3">
                    <ul className="list-group list-group-flush overflow-auto"
                        id="status-list">
                        {soldierComponents}
                    </ul>
                </div>
            </div>
        </main>
    );
}

export default SoldierList;
