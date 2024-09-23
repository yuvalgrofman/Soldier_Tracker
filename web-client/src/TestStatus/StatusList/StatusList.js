/** @format */

// import { React, useRef } from "react";
// import { getReformattedDate } from "../../../shared/userApi.js";
import SoldierStatus from "./SoldierStatus";
import '../TestStatus.css'

function StatusList({ test }) {
    var soldiers = test.soldiers

    const soldierComponents = soldiers.map((soldier) => (
        <SoldierStatus
            soldier={soldier}
            test={test}
        />
    ));

    return (
        <div className = "card-body p-3">
            <ul className="list-group list-group-flush overflow-auto" id="status-list">
                {soldierComponents}
            </ul>
        </div>
    );
}

export default StatusList;
