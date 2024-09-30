/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../general/InputField.js";
import "../general/Form.css";

/**
 * Regitser function returns the form page.
 * which contains a form to form a new company.
 * The form validates the company input and if the input is valid
 * it saves the company in the ?soldiersDB?.
 * @returns {HTMLDivElement} The form page.
 */
function AddCompany() {
    const navigate = useNavigate();

    const [company, setCompany] = React.useState({
        name: "",
        commander: "",
        platoons_num: 0,
        sections_num: 0
    });

    const [error, setError] = React.useState("");

    /**
     * The function handles the change of the input fields.
     * Its updates the soldier state according to the input field.
     * @param {*} name
     * @param {*} value
     */
    const handleChange = (name, value) => {
        setCompany({
            ...company,
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

        if (!company.name) {
            error = "Company name is required";
        } else if (!company.commander) {
            error = "Company commander is required";
        } else if (company.platoons_num < 1) {
            error = "Company needs at least one platoon";
        } else if (company.sections_num < 1) {
            error = "Company needs at least one section";
        } else {
            handleSubmit(setError);
        }

        setError(error);
    };

    const handleSubmit = async (setError) => {
        const companyDB = {
            name: company.name,
            commander: company.commander,
            platoonIds: []
        }

        const response = await fetch("http://127.0.0.1:5022/api/company", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(companyDB),
        });

        if (response["status"] === 409) {
            setError("Company already exists");
        } else {
            setError("");

            const platoonIds = []

            for (let i = 1; i < company.platoons_num + 1; i++) {
                const sectionIds = []

                // Creating the sections
                for (let j = 1; j < company.sections_num + 1; j++) {
                    const newSection = {name: "Section " + j.toString(), soldierIds: []}

                    const response = await fetch("http://127.0.0.1:5022/api/section", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(newSection),
                    });
                    sectionIds.push(response.sectionId)
                }

                const newPlatoon =  {name: "Platoon " + i.toString(), sectionIds}

                const response = await fetch("http://127.0.0.1:5022/api/platoon", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newPlatoon),
                });
                platoonIds.push(response.platoonId)
            }

            const response = await fetch("http://127.0.0.1:5022/api/updatePlatoons", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({name: company.name, platoonIds }),
            });

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
                                <div className="d-flex justify-content-center h3 mb-3">Add Company</div>

                                {/*Signup form*/}
                                <form>
                                    {/*Company Name input*/}
                                    <InputField
                                        labelOfInputField="Name"
                                        idOfInputField="AddCompany-name"
                                        updateFunction={(value) => {
                                            handleChange("name", value);
                                        }}
                                        inputType="text"
                                    />

                                    {/*Commander input*/}
                                    <InputField
                                        labelOfInputField="Commander"
                                        idOfInputField="AddCompany-commander"
                                        updateFunction={(value) => {
                                            handleChange("commander", value);
                                        }}
                                        inputType="text"
                                    />

                                    {/*Platoons amount*/}
                                    <InputField
                                        labelOfInputField="Amount of Platoons"
                                        idOfInputField="AddCompany-platoons_num"
                                        updateFunction={(value) => {
                                            handleChange("platoons_num", value);
                                        }}
                                        inputType="number"
                                    />

                                    {/*Sections amount*/}
                                    <InputField
                                        labelOfInputField="Amount of Sections"
                                        idOfInputField="AddCompany-sections_num"
                                        updateFunction={(value) => {
                                            handleChange("sections_num", value);
                                        }}
                                        inputType="number"
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

export default AddCompany;
