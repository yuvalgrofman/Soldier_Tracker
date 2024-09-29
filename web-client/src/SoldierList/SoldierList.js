/** @format */

import SoldierListElement from "./SoldierListElement";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    fetchSectionSoldiers, fetchPlatoonSoldiers, fetchCompanySoldiers,
    fetchSection, fetchPlatoon, fetchCompany } from "../general/API";

function SoldierList({ exception }) {
    const { forceType, id } = useParams();

    const [soldiers, setSoldiers] = useState([]);
    // const [subUnits, setForce] = useState([]);

    // const fetchForceMap = {
    //     "Section" : fetchSection,
    //     "Platoon": fetchPlatoon,
    //     "Company": fetchCompany
    // }

    const fetchForceSoldiersMap = {
        "Section" : fetchSectionSoldiers,
        "Platoon": fetchPlatoonSoldiers,
        "Company": fetchCompanySoldiers
    }

    useEffect(() => {
        fetchForceSoldiersMap[forceType](id).then((fetchedSoldiers) => {
            setSoldiers(fetchedSoldiers);

            // fetchForceMap[forceType](id).then((fetchedForce) => {
            //     let subUnits = [];
            // });
        });
    }, [forceType, id]);

    
    const soldierComponents = soldiers.map((soldier) => {
        if (exception) {
            if (soldier.exception) {
                return <SoldierListElement soldier={soldier} />;
            }
            return null;
        }
        return <SoldierListElement soldier={soldier} />;
    });

    return (
        <main className="container-sm w-80 shadow mt-4 p-0 rounded-2">
            <div className="card border-0"> 
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
