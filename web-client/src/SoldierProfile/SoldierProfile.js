/** @format */

import { useEffect, useState } from "react";
import { fetchSoldier, fetchSoldierResults } from "../general/API"; // Assuming these APIs are available
import placeholder from "../images/placeholder.png";
import { useParams } from "react-router-dom";
import StateBox from "../general/StateBox";
import "./SoldierProfile.css";

function SoldierProfile() {
  const { id } = useParams();
  const [soldierResults, setSoldierResults] = useState([]);

  const [soldier, setSoldier] = useState({
    name: "Null",
    citizenshipID: 123456789,
    armyID: 1234567,
    img: placeholder,
    section: "1",
    platoon: "1",
    company: "Yud",
    address: "Ben Gurion 28",
    medicalProfile: 97,
    rightHanded: true,
    packal: "None",
    religion: "Null",
    sensitivities: "None",
  });

  useEffect(() => {
    fetchSoldier(id).then((fetchedSoldier) => {
      if (fetchedSoldier == null) {
        alert("Error fetching soldier");
        return;
      }
      setSoldier(fetchedSoldier);

      fetchSoldierResults(id).then((fetchedResults) => {
        if (fetchedResults == null) {
          alert("Error fetching results");
          return;
        }
        setSoldierResults(fetchedResults);
      });
    });
  }, [id]);

  return (
    <main className="container w-80 shadow mt-4 p-4 rounded-2">
      <div className="card border-0">
        <div className="card-body text-center">
          <div className="card-header d-flex flex-column align-items-center bg-light">
            <h1 className="fw-bold">{soldier.name}</h1>
          </div>

          {/* Centered Profile Image */}
          <div className="d-flex justify-content-center mb-4 mt-3">
            <img
              src={soldier.profilePic ? soldier.profilePic : placeholder}
              className="rounded-circle profile-picture-big"
              alt="avatar"
              style={{ width: "150px", height: "150px" }}
            />
          </div>

          {/* Soldier Details */}
          <div className="row">
            <div className="col-md-1">
            </div>
            <div className="col-md-5">
              <p><strong>תז:</strong> {soldier.citizenshipID}</p>
              <p><strong>מ.א:</strong> {soldier.armyID}</p>
              <p><strong>פלוגה:</strong> {soldier.company}</p>
              <p><strong>מחלקה:</strong> {soldier.platoon}</p>
              <p><strong>כיתה:</strong> {soldier.section}</p>
            </div>
            <div className="col-md-5">
              <p><strong>כתובת:</strong> {soldier.address}</p>
              <p><strong>פרופיל רפואי:</strong> {soldier.medicalProfile}</p>
              <p><strong>יד חזקה:</strong> {soldier.rightHanded ? "ימין" : "שמאל"}</p>
              <p><strong>דת:</strong> {soldier.religion}</p>
              <p><strong>רגישויות:</strong> {soldier.sensitivities}</p>
              <p><strong>פק״ל:</strong> {soldier.packal}</p>
            </div>
            <div className="col-md-1">
            </div>
          </div>

          {/* Soldier Test Results */}
          <div className="mt-4">
            <h3 className="text-center mb-3">Soldier Results</h3>
            <ul className="list-group">
              {soldierResults.map((result, index) => (
                <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                  <span>{result.testName}</span>
                  <div>
                    <span className="me-3">{result.score}</span>
                    <StateBox state={result.status} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SoldierProfile;
