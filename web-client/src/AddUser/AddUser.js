/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import ImgField from "../general/ImgField.js";
import Link from "../general/Link.js";
import PasswordInputField from "../general/PasswordInputField/PasswordInputField.js";
import InputField from "../general/InputField.js";
import "../general/Form.css";
import { postUser } from "../general/API.js";

/**
 * Regitser function returns the form page.
 * which contains a form to form a new user, additionally
 * the form page contains a link to the login page.
 * The form validates the user input and if the input is valid
 * its saves the user in the usersDB.
 * @returns {HTMLDivElement} The form page.
 */
function AddUser() {
    const navigate = useNavigate();

    const [user, setUser] = React.useState({
        username: "",
        password: "",
        confirmPassword: "",
        profilePic: "",
    });

    const [error, setError] = React.useState("");

    /**
     * The function handles the change of the input fields.
     * Its updates the user state according to the input field.
     * @param {*} name
     * @param {*} value
     */
    const handleChange = (name, value) => {
        setUser({
            ...user,
            [name]: value,
        });
    };

    /**
     * The function validates the user input and if the input is valid
     * its saves the user in the usersDB and navigates to the login page.
     * @param {*} event
     */
    const validateAndSubmit = (event, setError) => {
        event.preventDefault();
        let error = "";

        if (!user.username) {
            error = "Username is required";
        } else if (!user.password) {
            error = "Password is required";
        } else if (!/\d/.test(user.password)) {
            error = "Password must contain at least one number";
        } else if (!/[a-zA-Z]/.test(user.password)) {
            error = "Password must contain at least one letter";
        } else if (user.password.length < 8) {
            error = "Password must be at least 8 characters";
        } else if (!user.confirmPassword) {
            error = "Confirm password is required";
        } else if (user.password !== user.confirmPassword) {
            error = "Confirm password is not match";
        } else if (!user.profilePic) {
            error = "Picture is required";
        } else {
            handleSubmit(setError);
        }

        setError(error);
    };

    const handleSubmit = async (setError) => {
        const response = await postUser(user);

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
                                <div className="d-flex justify-content-center h3 mb-3">Add User</div>

                                {/*Signup form*/}
                                <form>
                                    {/*Username input*/}
                                    <InputField
                                        labelOfInputField="username"
                                        idOfInputField="form-username"
                                        // updateFunction={updateUserUsername}
                                        updateFunction={(value) => {
                                            handleChange("username", value);
                                        }}
                                        inputType="text"
                                    />

                                    {/*Password input*/}
                                    <PasswordInputField
                                        labelOfInputField="password"
                                        idOfInputField="form-passwd"
                                        // updateFunction={updatueUserPassword}
                                        updateFunction={(value) => {
                                            handleChange("password", value);
                                        }}
                                    />

                                    {/*Confirm password input*/}
                                    <PasswordInputField
                                        labelOfInputField="confirm password"
                                        idOfInputField="form-confirm-passwd"
                                        // updateFunction={updatueUserConfirmPassword}
                                        updateFunction={(value) => {
                                            handleChange("confirmPassword", value);
                                        }}
                                    />

                                    {/*Picture*/}
                                    <ImgField
                                        name="profilePic"
                                        id="form-picture"
                                        text="picture"
                                        value={user.picture}
                                        handleChange={(value) => {
                                            handleChange("profilePic", value);
                                        }}
                                    />

                                    {/*Submit and redirection to sign in*/}
                                    <div className="d-flex flex-column">
                                        <p className="error-message bold mx-auto mb-3">{error}</p>

                                        <button
                                            type="submit"
                                            onClick={(event) => {
                                                validateAndSubmit(event, setError);
                                            }}
                                            className="btn bg-dark-red darken-on-hover w-100 text-white fw-600 py-2 mb-4"
                                        >
                                            Register
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

export default AddUser;