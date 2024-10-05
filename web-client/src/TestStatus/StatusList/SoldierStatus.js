/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import StateBox from "../../general/StateBox";
import "../TestStatus.css";
import defImg from "../../images/default-img-icon.png";
import { postUpdateResult } from "../../general/API";

function SoldierStatus({ result, soldier, test }) {
  // State to manage the score input value
  const [score, setScore] = useState(result.score);

  const format_to_lambda = {
    HIGH: (a, b) => a >= b,
    LOW: (a, b) => a <= b,
  };

  let soldierState;
  if (test.type in format_to_lambda) {
    let cmp = format_to_lambda[test.type];

    if (cmp(result.score, test.excellent)) {
      soldierState = "EXCELLENT";
    } else if (cmp(result.score, test.pass)) {
      soldierState = "PASSED";
    } else {
      soldierState = "FAILED";
    }
  }

  // Handle score change and update the server
  const handleScoreChange = async (event) => {
    const newScore = event.target.value;
    setScore(newScore);

    // Send the updated score to the server
    await postUpdateResult(test.link, result.soldierID, newScore, soldierState);
  };

  return (
    <li className="list-group-item d-flex align-items-center mx-0 darken-on-hover position-relative">
      <Link
        to={`/Test/${test.link}/${result.soldierID}`}
        key={result.soldierID}
        className="w-100 d-flex align-items-center"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <span>
          <img
            src={soldier.profilePic ? soldier.profilePic : defImg}
            className="ms-1 rounded-circle profile-picture"
            alt="avatar"
          />
        </span>
        <span
          className="ms-3 d-inline-block text-truncate name-box"
          style={{ maxWidth: 200 }}
        >
          {soldier.name}
        </span>
      </Link>

      {/* Input element placed where the score was */}
      <input
        type="number"
        value={score}
        onChange={handleScoreChange}
        className="form-control soldier-input"
        style={{
          width: 80,
          position: "absolute",
          left: "300px", // Align it with the rest of the layout
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />

      {/* StateBox moved to the right of the input */}
      <span
        className="ms-2 d-inline-block"
        style={{
          position: "absolute",
          left: "400px", // Adjust this value to position the StateBox
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <StateBox state={soldierState} />
      </span>
    </li>
  );
}

export default SoldierStatus;
