/** @format */

import StateBox from "../../general/StateBox";
import '../TestStatus.css'
import defImg from "../../images/default-img-icon.png"

function SoldierStatus({ soldier, test}) {
    let format_to_lambda = {
        "HIGH": (a,b) => a >= b,
        "LOW": (a,b) => a <= b
    }
    let soldierState;

    if (test.format in format_to_lambda) {
        let cmp = format_to_lambda[test.format]
        
        if (cmp(test.findBySoldierId(soldier.id).grade, test.excellent)) {
            soldierState = "EXCELLENT";        
        } else if (cmp(test.findBySoldierId(soldier.id).grade, test.pass)) {
            soldierState = "PASSED";        
        } else {
            soldierState = "FAILED";
        }
    }

    return (
        <li
            className="list-group-item d-flex align-items-center mx-0 darken-on-hover"
        >
            <span>
                <img src={soldier.profilePic ? soldier.profilePic : defImg} className="ms-1 rounded-circle profile-picture" alt="avatar" />
            </span>
            <span className="ms-3 d-inline-block text-truncate name-box" style={{ maxWidth: 200 }}>
                {soldier.name}
            </span>
            <span className="ms-4 d-inline-block text-truncate score-box" style={{ maxWidth: 200 }}>
                {test.findBySoldierId(soldier.id).grade}
            </span>
            <span className="ms-2 d-inline-block ">
                <StateBox state = { soldierState }  />
            </span>
        </li>
    );
}

export default SoldierStatus;
