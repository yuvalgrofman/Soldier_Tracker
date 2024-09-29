/** @format */

import { useEffect, useState } from "react";
import { fetchSoldier, fetchSoldierResults } from "../general/API"; // Assuming these APIs are available
import placeholder from "../images/placeholder.png";
import { useParams } from "react-router-dom";
import StateBox from "../general/StateBox";
import "./SoldierProfile.css";

function SoldierProfile() {
  // Example data for soldier results (can be fetched from an API)
  let r1 = { objectId: 101, testName: "10 Meters", soldierID: 1111111, score: 100, isCompleted: true, status: "EXCELLENT" };
  let r2 = { objectId: 102, testName: "25 Meters", soldierID: 1111111, score: 80, isCompleted: true, status: "PASSED" };
  let r3 = { objectId: 103, testName: "50 Meters", soldierID: 1111111, score: 70, isCompleted: true, status: "FAILED" };

  const { id } = useParams();
  const [soldierResults, setSoldierResults] = useState([r1, r2, r3]);

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
    <main className="container w-50 shadow mt-4 p-4 rounded-2">
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
            <div className="col-md-6">
              <p><strong>Citizenship ID:</strong> {soldier.citizenshipID}</p>
              <p><strong>Army ID:</strong> {soldier.armyID}</p>
              <p><strong>Company:</strong> {soldier.company}</p>
              <p><strong>Platoon:</strong> {soldier.platoon}</p>
              <p><strong>Section:</strong> {soldier.section}</p>
            </div>
            <div className="col-md-6">
              <p><strong>Address:</strong> {soldier.address}</p>
              <p><strong>Medical Profile:</strong> {soldier.medicalProfile}</p>
              <p><strong>Right Handed:</strong> {soldier.rightHanded ? "Yes" : "No"}</p>
              <p><strong>Religion:</strong> {soldier.religion}</p>
              <p><strong>Sensitivities:</strong> {soldier.sensitivities}</p>
              <p><strong>Packal:</strong> {soldier.packal}</p>
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
