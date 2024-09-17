/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import ImgField from "../general/ImgField.js";
import InputField from "../general/InputField.js";
import "../general/Form.css";

/**
 * Regitser function returns the form page.
 * which contains a form to form a new soldier, additionally
 * the form page contains a link to the login page.
 * The form validates the soldier input and if the input is valid
 * its saves the soldier in the soldiersDB.
 * @returns {HTMLDivElement} The form page.
 */
function AddSoldier() {
    const navigate = useNavigate();

    const [soldier, setSoldier] = React.useState({
        name: "",
        profilePic: "",
        ID: "",
        armyID: "",
        medicalProfile: "",
        address: "",
        company: "",
        platoon: "",
        section: ""
    });

    const [error, setError] = React.useState("");

    /**
     * The function handles the change of the input fields.
     * Its updates the soldier state according to the input field.
     * @param {*} name
     * @param {*} value
     */
    const handleChange = (name, value) => {
        setSoldier({
            ...soldier,
            [name]: value,
        });
    };

    /**
     * The function validates the soldier input and if the input is valid
     * its saves the soldier in the soldiersDB and navigates to the login page.
     * @param {*} event
     */
    const validateAndSubmit = (event, setError) => {
        event.preventDefault();
        let error = "";

        if (!soldier.soldiername) {
            error = "Username is required";
        } else if (!soldier.profilePic) {
            error = "Profile Picture is required";
        } else if (!soldier.ID) {
            error = "ID is required";
        } else if (!soldier.armyID) {
            error = "Army ID is required";
        } else if (!soldier.company || !soldier.platoon || !soldier.section) {
            error = "Soldier's Unit is required";
        } else {
            handleSubmit(setError);
        }

        setError(error);
    };

    const handleSubmit = async (setError) => {
        const response = await fetch("http://127.0.0.1:5022/api/Users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(soldier),
        });

        if (response["status"] === 409) {
            setError("User already exists");
        } else {
            setError("");
            navigate("/");
        }
    };

    return (
        <div className="p-5">
            <main className="container form-container w-30 p-5 mt-5 shadow bg-white rounded-3">
                <div className="row">
                    <div className="col col-12">
                        <div className="border-0 card">
                            <div className="d-flex flex-column card-body">
                                {/*Title*/}
                                <div className="d-flex justify-content-center h3 mb-3">Add Soldier</div>

                                {/*Signup form*/}
                                <form>
                                    {/*Username input*/}
                                    <InputField
                                        labelOfInputField="Name"
                                        idOfInputField="AddSoldier-name"
                                        updateFunction={(value) => {
                                            handleChange("name", value);
                                        }}
                                        input-type="text"
                                    />

                                    {/*Picture*/}
                                    <ImgField
                                        name="profilePic"
                                        id="AddSoldier-picture"
                                        text="picture"
                                        value={soldier.picture}
                                        handleChange={(value) => {
                                            handleChange("profilePic", value);
                                        }}
                                    />

                                    {/*Id*/}
                                    <InputField
                                        labelOfInputField="ID"
                                        idOfInputField="AddSoldier-ID"
                                        updateFunction={(value) => {
                                            handleChange("ID", value);
                                        }}
                                        input-type="text"
                                    />

                                    {/*Army Id*/}
                                    <InputField
                                        labelOfInputField="Army ID"
                                        idOfInputField="AddSoldier-ArmyID"
                                        updateFunction={(value) => {
                                            handleChange("ArmyID", value);
                                        }}
                                        input-type="text"
                                    />

                                    {/*Medical Profile*/}
                                    <InputField
                                        labelOfInputField="Medical Profile"
                                        idOfInputField="AddSoldier-MedicalProfile"
                                        updateFunction={(value) => {
                                            handleChange("medicalProfile", value);
                                        }}
                                        input-type="text"
                                    />

                                    {/*Address*/}
                                    <InputField
                                        labelOfInputField="Address"
                                        idOfInputField="AddSoldier-Address"
                                        updateFunction={(value) => {
                                            handleChange("address", value);
                                        }}
                                        input-type="text"
                                    />

                                    {/*Company*/}
                                    <InputField
                                        labelOfInputField="Company"
                                        idOfInputField="AddSoldier-Company"
                                        updateFunction={(value) => {
                                            handleChange("company", value);
                                        }}
                                        input-type="text"
                                    />

                                    {/*Platoon*/}
                                    <InputField
                                        labelOfInputField="Platoon"
                                        idOfInputField="AddSoldier-Platoon"
                                        updateFunction={(value) => {
                                            handleChange("platoon", value);
                                        }}
                                        input-type="text"
                                    />

                                    {/*Section*/}
                                    <InputField
                                        labelOfInputField="Section"
                                        idOfInputField="AddSoldier-Section"
                                        updateFunction={(value) => {
                                            handleChange("section", value);
                                        }}
                                        input-type="text"
                                    />

                                    {/*Submit and redirection to sign in*/}
                                    <div className="d-flex flex-column">
                                        <p className="error-message bold mx-auto mb-3">{error}</p>

                                        <button
                                            type="submit"
                                            onClick={(event) => {
                                                validateAndSubmit(event, setError);
                                            }}
                                            className="btn bg-light-purple darken-on-hover w-100 text-white fw-600 py-2 mb-4"
                                        >
                                            Submit
                                        </button>

                                        {/* <div className="mx-auto">
                                            <Link
                                                initialText="Already have an account?&nbsp;"
                                                linkText="Sign in"
                                                link="/"
                                            />
                                        </div> */}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default AddSoldier;
