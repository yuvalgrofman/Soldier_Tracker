/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../general/InputField.js";
import "../general/Form.css";
import {postCompany, postPlatoon, postSection, updatePlatoons} from "../general/API.js";

/**
 * AddCompany function returns a form page to add a new company.
 * The form validates the company input and, if valid, saves it.
 * @returns {HTMLDivElement} The form page.
 */
function AddCompany() {
    const navigate = useNavigate();

    const [company, setCompany] = React.useState({
        name: "",
        commander: "",
        platoon1Commander: "",
        platoon2Commander: "",
        platoon3Commander: "",
        section11Commander: "",
        section12Commander: "",
        section13Commander: "",
        section21Commander: "",
        section22Commander: "",
        section23Commander: "",
        section31Commander: "",
        section32Commander: "",
        section33Commander: "",
    });

    const [error, setError] = React.useState("");

    // Handles form input changes
    const handleChange = (name, value) => {
        setCompany({
            ...company,
            [name]: value,
        });
    };

    // Validates input and handles form submission
    const validateAndSubmit = (event, setError) => {
        event.preventDefault();
        let error = "";

        if (!company.name) {
            error = "Company name is required";
        } else if (!company.commander) {
            error = "Company commander is required";
        } else if (!company.platoon1Commander || !company.platoon2Commander || !company.platoon3Commander) {
            error = "Platoon commanders are required";
        } else if (!company.section11Commander || !company.section12Commander || !company.section13Commander
            || !company.section21Commander || !company.section22Commander || !company.section23Commander
            || !company.section31Commander || !company.section32Commander || !company.section33Commander ) {
            error = "Section commanders are required";
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

        const response = await postCompany(companyDB);

        if (response.status === 409) {
            setError("Company already exists");
        } else {
            setError("");

            const platoonIds = []

            for (let i = 1; i < company.platoons_num + 1; i++) {
                const sectionIds = []

                // Creating the sections
                for (let j = 1; j < company.sections_num + 1; j++) {
                    const newSection = {name: "Section " + j.toString(), soldierIds: []}

                    const response = await postSection(newSection)
                    sectionIds.push(response.sectionId)
                }

                const newPlatoon =  {name: "Platoon " + i.toString(), sectionIds}

                const response = await postPlatoon(newPlatoon)
                platoonIds.push(response.platoonId)
            }

            const response = await updatePlatoons(company.name, platoonIds)

            navigate("/");
        }
    };

    return (
        <div className="p-5">
            <main className="container form-container w-50 p-5 mt-5 shadow bg-white rounded-3">
                <div className="row">
                    <div className="col col-12">
                        <div className="border-0 card">
                            <div className="d-flex flex-column card-body">
                                {/*Title*/}
                                <div className="d-flex justify-content-center h3 mb-3">Add Company</div>

                                {/*Form*/}
                                <form>
                                    {/* Company Name */}
                                    <InputField
                                        labelOfInputField="Company Name"
                                        idOfInputField="company-name"
                                        updateFunction={(value) => handleChange("name", value)}
                                        inputType="text"
                                    />

                                    {/* Company Commander */}
                                    <InputField
                                        labelOfInputField="Company Commander"
                                        idOfInputField="company-commander"
                                        updateFunction={(value) => handleChange("commander", value)}
                                        inputType="text"
                                    />

                                    {/* Grid Layout for Platoons and Sections */}
                                    <div className="row">
                                        {/* Platoon 1 */}
                                        <div className="col-md-4">
                                            <h4 className="mt-4">Platoon 1</h4>
                                            <InputField
                                                labelOfInputField="Platoon 1 Commander"
                                                idOfInputField="platoon1-commander"
                                                updateFunction={(value) => handleChange("platoon1Commander", value)}
                                                inputType="text"
                                            />
                                            <InputField
                                                labelOfInputField="Section 1A Commander"
                                                idOfInputField="section11-commander"
                                                updateFunction={(value) => handleChange("section11Commander", value)}
                                                inputType="text"
                                            />
                                            <InputField
                                                labelOfInputField="Section 1B Commander"
                                                idOfInputField="section12-commander"
                                                updateFunction={(value) => handleChange("section12Commander", value)}
                                                inputType="text"
                                            />
                                            <InputField
                                                labelOfInputField="Section 1C Commander"
                                                idOfInputField="section13-commander"
                                                updateFunction={(value) => handleChange("section13Commander", value)}
                                                inputType="text"
                                            />
                                        </div>

                                        {/* Platoon 2 */}
                                        <div className="col-md-4">
                                            <h4 className="mt-4">Platoon 2</h4>
                                            <InputField
                                                labelOfInputField="Platoon 2 Commander"
                                                idOfInputField="platoon2-commander"
                                                updateFunction={(value) => handleChange("platoon2Commander", value)}
                                                inputType="text"
                                            />
                                            <InputField
                                                labelOfInputField="Section 2A Commander"
                                                idOfInputField="section21-commander"
                                                updateFunction={(value) => handleChange("section21Commander", value)}
                                                inputType="text"
                                            />
                                            <InputField
                                                labelOfInputField="Section 2B Commander"
                                                idOfInputField="section22-commander"
                                                updateFunction={(value) => handleChange("section22Commander", value)}
                                                inputType="text"
                                            />
                                            <InputField
                                                labelOfInputField="Section 2C Commander"
                                                idOfInputField="section23-commander"
                                                updateFunction={(value) => handleChange("section23Commander", value)}
                                                inputType="text"
                                            />
                                        </div>

                                        {/* Platoon 3 */}
                                        <div className="col-md-4">
                                            <h4 className="mt-4">Platoon 3</h4>
                                            <InputField
                                                labelOfInputField="Platoon 3 Commander"
                                                idOfInputField="platoon3-commander"
                                                updateFunction={(value) => handleChange("platoon3Commander", value)}
                                                inputType="text"
                                            />
                                            <InputField
                                                labelOfInputField="Section 3A Commander"
                                                idOfInputField="section31-commander"
                                                updateFunction={(value) => handleChange("section31Commander", value)}
                                                inputType="text"
                                            />
                                            <InputField
                                                labelOfInputField="Section 3B Commander"
                                                idOfInputField="section32-commander"
                                                updateFunction={(value) => handleChange("section32Commander", value)}
                                                inputType="text"
                                            />
                                            <InputField
                                                labelOfInputField="Section 3C Commander"
                                                idOfInputField="section33-commander"
                                                updateFunction={(value) => handleChange("section33Commander", value)}
                                                inputType="text"
                                            />
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="d-flex flex-column">
                                        <p className="error-message bold mx-auto mb-3">{error}</p>

                                        <button
                                            type="submit"
                                            onClick={(event) => {
                                                validateAndSubmit(event, setError);
                                            }}
                                            className="btn bg-dark-red darken-on-hover w-100 text-white fw-600 py-2 mb-4"
                                        >
                                            Submit
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

export default AddCompany;
