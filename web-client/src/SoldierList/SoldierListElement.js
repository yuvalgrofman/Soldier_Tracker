/** @format */

import StateBox from "../general/StateBox";
import { useNavigate } from 'react-router-dom';
// import '../TestStatus.css'

function SoldierListElement({ soldier, testFailed }) {
    let soldierState = "UNDEFINED";
    let navigate = useNavigate();

    const getState = function () {
        if (soldier.exception > 0) {
            return "EXCEPTION";
        }
        return "NORMAL";
    }

    soldierState = getState();

    return (
        <li
            onClick={() => {navigate("/Soldier/" + soldier.armyID)}}
            className="list-group-item d-flex align-items-center mx-0 darken-on-hover"
        >
            <span>
                <img src={soldier.profilePic} className="ms-1 rounded-circle profile-picture" alt="avatar" />
            </span>
            <span className="ms-3 d-inline-block text-truncate name-box" style={{ maxWidth: 200 }}>
                {soldier.name}
            </span>
            <span className="ms-3 d-inline-block text-truncate name-box" style={{ maxWidth: 200 }}>
                {soldier.armyID}
            </span>
            <span className="ms-2 d-inline-block">
                { testFailed ? <StateBox state = { soldierState } text={testFailed} /> : <StateBox state = { soldierState }  /> }
            </span>
        </li>
    );
}

export default SoldierListElement;
