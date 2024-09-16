/** @format */

import { StateBox } from "../../general/StateBox";
import { React, useRef } from "react";
import { getReformattedDate } from "../../../shared/userApi.js";

function SoldierStatus({ soldier, test}) {
    format_to_lambda = {
        "HIGH": (a,b) => a >= b,
        "LOW": (a,b) => a <= b
    }

    if (test.format in format_to_lambda) {
        cmp = format_to_lambda[test.format]
        
        if (cmp(test.findBySoldierId(soldier.id).grade, test.excellent)) {
            soldierState = "EXCELLENT";        
        } else if (cmp(test.findBySoldierId(soldier.id).grade, test.pass)) {
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
