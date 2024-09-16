/** @format */

import { StateBox } from "../../general/StateBox";
import { React, useRef } from "react";
import { getReformattedDate } from "../../../shared/userApi.js";

function SoldierStatus({ soldier, test}) {

    if (test.format == "HIGH") {
        if (test.findBySoldierId(soldier.id).grade >= test.excellent) {
            soldierState = "EXCELLENT";        
        } else if (test.findBySoldierId(soldier.id).grade >= test.pass) {
            soldierState = "PASS";        
        } else {
            soldierState = "FAIL";
        }
    } else if (test.format == "LOW") {
        if (test.findBySoldierId(soldier.id).grade <= test.excellent) {
            soldierState = "EXCELLENT";
        } else if (test.findBySoldierId(soldier.id).grade <= test.pass) {
            soldierState = "PASS";        
        } else {
            soldierState = "FAIL";
        }
    }

    return (
        <li
            className="list-group-item d-flex align-items-center mx-0 darken-on-hover"
        >
            <div>
                <img src={soldier.profilePic} className="rounded-circle profile-picture" alt="avatar" />
            </div>
            <span className="d-inline-block text-truncate" style={{ maxWidth: 200 }}>
                {soldier.name}
            </span>
            <span className="d-inline-block text-truncate" style={{ maxWidth: 200 }}>
                {test.findBySoldierId(soldier.id)}
            </span>
            <span>
                <StateBox state = { soldierState }  />
            </span>
        </li>
    );
}

export default Contact;
