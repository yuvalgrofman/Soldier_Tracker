/** @format */

// import { React, useRef } from "react";
// import { getReformattedDate } from "../../../shared/userApi.js";
import SoldierStatus from "./SoldierStatus";
import '../TestStatus.css'

function StatusList({ test }) {
    var soldiers = test.soldiers
    // const soldierComponents = soldiers.forEach(soldier => (
    //     <SoldierStatus
    //         soldier={soldier}
    //         test={test}
    //     />
    // ));

    const soldierComponents = soldiers.map((soldier) => (
        <SoldierStatus
            soldier={soldier}
            test={test}
        />
    ));

    // const contactComponents = contacts.map((contact, key) => (
    //     <Contact
    //         user={user}
    //         contact={contact}
    //         setChosenContact={setChosenContact}
    //         status={status}
    //         forceRerender={forceRerender}
    //         key={key}
    //     />
    // ));

    return (
        <div className = "card-body p-3">
            <ul className="list-group list-group-flush overflow-auto" id="status-list">
                {soldierComponents}
            </ul>
        </div>
    );
}

export default StatusList;
