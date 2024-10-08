/** @format */

import ActivityListElement from "./ActivityListElement";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    fetchSectionSoldiers, fetchPlatoonSoldiers, fetchCompanySoldiers,
    fetchCompanyPlatoons, fetchPlatoonSections, fetchTestFailedBySoldier,
    fetchTestsFailedByUsers} from "../general/API";

import { useNavigate } from "react-router-dom";
import "./ActivityList.css"
import SearchBar from "../general/SearchBar";

// TODO: fix bug where the soldier list is reset when entering platoon/section.

function ActivityList() {
    const navigate = useNavigate();
    const { forceType, id } = useParams();

    const [soldiers, setSoldiers] = useState([]);
    const [soldiersStatus, setSoldierStatus] = useState([]);
    const [title, setTitle] = useState("");
    const [buttonNames, setButtonNames] = useState([]);
    const [buttonPages, setButtonPages] = useState([]);
    const [query, setQuery] = useState("");

    let linkPrefix = "/Activity/";

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
                title = " פלוגה " + fetchedSoldiers[0].company + " -  מחלקה " + fetchedSoldiers[0].platoon + " - כיתה " + fetchedSoldiers[0].section;
            } else if (forceType === "Platoon") {
                title = " פלוגה " + fetchedSoldiers[0].company + " -  מחלקה " + fetchedSoldiers[0].platoon;
            } else {
                title = " פלוגה " + fetchedSoldiers[0].company;
            }

            let soldierStatus = fetchedSoldiers.map((soldier) => { return {armyID: soldier.armyID, completed : false }; });

            setTitle(title);
            setSoldiers(fetchedSoldiers);
            setSoldierStatus(soldierStatus);
        });
    }, [forceType, id]);


    const soldierComponents = soldiers.map((soldier) => {
        const updateSoldierStatus = () => {
            let armyID = soldier.armyID;
            let newStatus = soldiersStatus.map((status) => {
                if (status.armyID === armyID) {
                    return {armyID: status.armyID, completed: !status.completed};
                }
                return status;
            });

            setSoldierStatus(newStatus);
        }

        if (query !== "" && !soldier.name.toLowerCase().includes(query.toLowerCase()))
            return null;

        return (<ActivityListElement soldier={soldier} onClick={updateSoldierStatus} />);
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

export default ActivityList;
