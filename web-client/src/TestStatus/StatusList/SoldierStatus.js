/** @format */

import StateBox from "../../general/StateBox";
import '../TestStatus.css'

function SoldierStatus({ soldier, test}) {
    let soldierState = "FAILED";

    if (test.format == "HIGH") {
        if (test.findBySoldierId(soldier.id)>= test.excellent) {
            soldierState = "EXCELLENT";        
        } else if (test.findBySoldierId(soldier.id) >= test.pass) {
            soldierState = "PASS";        
        } else {
            soldierState = "FAIL";
        }
    } else if (test.format == "LOW") {
        if (test.findBySoldierId(soldier.id) <= test.excellent) {
            soldierState = "EXCELLENT";
        } else if (test.findBySoldierId(soldier.id) <= test.pass) {
            soldierState = "PASS";        
        } else {
            soldierState = "FAIL";
        }
    }

    return (
        <li
            className="list-group-item d-flex align-items-center mx-0 darken-on-hover"
        >
            <span>
                <img src={soldier.profilePic} className="ms-1 rounded-circle profile-picture" alt="avatar" />
            </span>
            <span className="ms-3 d-inline-block text-truncate name-box" style={{ maxWidth: 200 }}>
                {soldier.name}
            </span>
            <span className="ms-4 d-inline-block text-truncate score-box" style={{ maxWidth: 200 }}>
                {test.findBySoldierId(soldier.id)}
            </span>
            <span className="ms-2 d-inline-block ">
                <StateBox state = { soldierState }  />
            </span>
        </li>
    );
}

export default SoldierStatus;
