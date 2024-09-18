/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../general/InputField.js";
import "../general/Form.css";

/**
 * Regitser function returns the form page.
 * which contains a form to form a new platoon.
 * The form validates the platoon input and if the input is valid
 * it saves the company in the ?soldiersDB?.
 * @returns {HTMLDivElement} The form page.
 */
function AddPlatoon({ platoonName, sections_num }) {
    const navigate = useNavigate();

    const [platoon, setPlatoon] = React.useState({
        name: platoonName,
        officer: "",
        sections_num: sections_num,
    });

    const [error, setError] = React.useState("");

    /**
     * The function handles the change of the input fields.
     * Its updates the soldier state according to the input field.
     * @param {*} name
     * @param {*} value
     */
    const handleChange = (name, value) => {
        setPlatoon({
            ...platoon,
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

        if (!platoon.name) {
            error = "Platoon name is required";
        } else if (!platoon.officer) {
            error = "Platoon officer is required";
        } else if (platoon.sections_num < 1) {
            error = "Platoon needs at least one section";
        } else {
            handleSubmit(setError);
        }

        setError(error);
    };

    //OHAD NOTE: I am not messing with this section since I have no idea what
    //           is going on with the database right now :)
    const handleSubmit = async (setError) => {
        const response = await fetch("http://127.0.0.1:5022/api/Platoon", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(platoon),
        });

        if (response["status"] === 409) {
            setError("Platoon already exists");
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
                                <div className="d-flex justify-content-center h3 mb-3">Add Platoon {platoonName}</div>

                                {/*Signup form*/}
                                <form>
                                    {/*Officer input*/}
                                    <InputField
                                        labelOfInputField="Commander"
                                        idOfInputField="AddCompany-commander"
                                        updateFunction={(value) => {
                                            handleChange("commander", value);
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

export default AddPlatoon;
