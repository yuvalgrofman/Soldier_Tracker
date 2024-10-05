/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Ensure to import useNavigate

function ActivityListElement({ soldier, onClick }) {
  const navigate = useNavigate();
  // State to manage the checkbox status (completed/incompleted)
  const [isCompleted, setIsCompleted] = useState(false);

  // Toggle the checkbox status
  const toggleCompletion = () => {
    setIsCompleted(!isCompleted);
    onClick();
  };

  return (
    <li
      className="list-group-item d-flex align-items-center mx-0 darken-on-hover"
    >
      <span>
        <img
          onClick={() => navigate(`/Soldier/${soldier.armyID}`)}
          src={soldier.profilePic}
          className="ms-1 rounded-circle profile-picture"
          alt="avatar"
        />
      </span>
      <span className="ms-3 d-inline-block text-truncate name-box" style={{ maxWidth: 200 }}>
        {soldier.name}
      </span>
      <span className="ms-3 d-inline-block text-truncate name-box" style={{ maxWidth: 200 }}>
        {soldier.armyID}
      </span>

      <span className="ms-2 d-inline-block">
        {/* Check Box with Bootstrap styling */}
        <button
          onClick={toggleCompletion}
          className={`btn ${isCompleted ? "btn-success" : "btn-danger"}`}
        >
          {isCompleted ? "Completed" : "Incompleted"}
        </button>
      </span>
    </li>
  );
}

export default ActivityListElement;
