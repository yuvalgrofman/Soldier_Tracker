/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import ImgField from "../general/ImgField.js";
import InputField from "../general/InputField.js";
import { postSoldier } from "../general/API.js";
import "../general/Form.css";

/**
 * Register function returns the form page.
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
        religion: "",
        company: "",
        platoon: "",
        section: "",
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

        if (!soldier.name) {
            error = "שם החייל הוא שדה חובה";
        } else if (!soldier.ID) {
            error = "תעודת זהות היא שדה חובה";
        } else if (!soldier.armyID) {
            error = "מס' צבא הוא שדה חובה";
        } else if (!soldier.medicalProfile) {
            error = "פרופיל רפואי הוא שדה חובה";
        } else if (!soldier.company || !soldier.platoon || !soldier.section) {
            error = "יש לציין את היחידה של החייל";
        } else if (!(/\d{9}/.test(soldier.ID))) {
            error = "תעודת זהות של חייל חייבת להיות בת 9 ספרות";
        } else if (!(/^\d{6,}$/.test(soldier.armyID))) {
            error = "מספר הצבא של החייל חייב לכלול לפחות 6 ספרות";
        } else if (soldier.medicalProfile == null || !(/^\d{2}$/.test(soldier.medicalProfile))) {
            error = "פרופיל רפואי חייב להיות 2 ספרות";
        } else {
            handleSubmit(setError);
        }

        setError(error);
    };

    const handleSubmit = async (setError) => {
        const response = await postSoldier(soldier);

        if (response["status"] === 409) {
            setError("החייל כבר קיים");
        } else {
            setError("");
            navigate("/");
        }
    };

    return (
        <div className="p-5">
            <main className="container form-container w-30 p-5 mt-5 shadow bg-white rounded-3" style={{ textAlign: "right" }}>
                <div className="row">
                    <div className="col col-12">
                        <div className="border-0 card">
                            <div className="d-flex flex-column card-body">
                                {/* Title */}
                                <div className="d-flex justify-content-center h3 mb-3">הוסף חייל</div>

                                {/* Signup form */}
                                <form>
                                    {/* Name input */}
                                    <InputField
                                        labelOfInputField="שם"
                                        idOfInputField="AddSoldier-name"
                                        updateFunction={(value) => {
                                            handleChange("name", value);
                                        }}
                                        inputType="text"
                                    />

                                    {/* Picture */}
                                    <ImgField
                                        name="profilePic"
                                        id="AddSoldier-picture"
                                        text="תמונה"
                                        value={soldier.picture}
                                        handleChange={(value) => {
                                            handleChange("profilePic", value);
                                        }}
                                    />

                                    {/* ID */}
                                    <InputField
                                        labelOfInputField="תעודת זהות"
                                        idOfInputField="AddSoldier-ID"
                                        updateFunction={(value) => {
                                            handleChange("ID", value);
                                        }}
                                        inputType="text"
                                    />

                                    {/* Army ID */}
                                    <InputField
                                        labelOfInputField="מס׳ אישי"
                                        idOfInputField="AddSoldier-ArmyID"
                                        updateFunction={(value) => {
                                            handleChange("armyID", value);
                                        }}
                                        inputType="text"
                                    />

                                    {/* Medical Profile */}
                                    <InputField
                                        labelOfInputField="פרופיל רפואי"
                                        idOfInputField="AddSoldier-MedicalProfile"
                                        updateFunction={(value) => {
                                            handleChange("medicalProfile", value);
                                        }}
                                        inputType="text"
                                    />

                                    {/* Address */}
                                    <InputField
                                        labelOfInputField="כתובת"
                                        idOfInputField="AddSoldier-Address"
                                        updateFunction={(value) => {
                                            handleChange("address", value);
                                        }}
                                        inputType="text"
                                    />

                                    {/* Religion */}
                                    <InputField
                                        labelOfInputField="דת"
                                        idOfInputField="AddSoldier-Religion"
                                        updateFunction={(value) => {
                                            handleChange("religion", value);
                                        }}
                                        inputType="text"
                                    />

                                    {/* Company */}
                                    <InputField
                                        labelOfInputField="פלוגה"
                                        idOfInputField="AddSoldier-Company"
                                        updateFunction={(value) => {
                                            handleChange("company", value);
                                        }}
                                        inputType="text"
                                    />

                                    {/* Platoon */}
                                    <InputField
                                        labelOfInputField="מחלקה"
                                        idOfInputField="AddSoldier-Platoon"
                                        updateFunction={(value) => {
                                            handleChange("platoon", value);
                                        }}
                                        inputType="text"
                                    />

                                    {/* Section */}
                                    <InputField
                                        labelOfInputField="כיתה"
                                        idOfInputField="AddSoldier-Section"
                                        updateFunction={(value) => {
                                            handleChange("section", value);
                                        }}
                                        inputType="text"
                                    />

                                    {/* Submit and redirection to sign in */}
                                    <div className="d-flex flex-column">
                                        <p className="error-message bold mx-auto mb-3">{error}</p>

                                        <button
                                            type="submit"
                                            onClick={(event) => {
                                                validateAndSubmit(event, setError);
                                            }}
                                            className="btn bg-dark-red darken-on-hover w-100 text-white fw-600 py-2 mb-4"
                                        >
                                            שלח
                                        </button>
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
