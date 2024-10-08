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
 * הפונקציה AddUser מחזירה את דף הטופס.
 * הדף מכיל טופס להוספת משתמש חדש, בנוסף
 * הדף מכיל קישור לדף ההתחברות.
 * הטופס מאמת את קלט המשתמש, ואם הוא תקין,
 * שומר את המשתמש ב־usersDB.
 * @returns {HTMLDivElement} דף הטופס.
 */
function AddUser() {
    const navigate = useNavigate();

    const [user, setUser] = React.useState({
        username: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = React.useState("");

    /**
     * הפונקציה מטפלת בשינוי של שדות הקלט.
     * מעדכנת את מצב המשתמש בהתאם לשדה הקלט.
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
     * הפונקציה מאמתת את קלט המשתמש ואם הוא תקין
     * שומרת את המשתמש ב־usersDB ומנתבת לדף ההתחברות.
     * @param {*} event
     */
    const validateAndSubmit = (event, setError) => {
        event.preventDefault();
        let error = "";

        if (!user.username) {
            error = "שם משתמש נדרש";
        } else if (!user.password) {
            error = "סיסמה נדרשת";
        } else if (!/\d/.test(user.password)) {
            error = "הסיסמה חייבת לכלול לפחות מספר אחד";
        } else if (!/[a-zA-Z]/.test(user.password)) {
            error = "הסיסמה חייבת לכלול לפחות אות אחת";
        } else if (user.password.length < 8) {
            error = "הסיסמה חייבת להיות באורך של לפחות 8 תווים";
        } else if (!user.confirmPassword) {
            error = "אישור סיסמה נדרש";
        } else if (user.password !== user.confirmPassword) {
            error = "אישור הסיסמה אינו תואם";
        } else {
            handleSubmit(setError);
        }

        setError(error);
    };

    const handleSubmit = async (setError) => {
        const userDB = { username: user.username, password: user.password };
        const response = await postUser(userDB);

        if (response["status"] === 409) {
            setError("המשתמש כבר קיים");
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
                                {/*כותרת*/}
                                <div className="d-flex justify-content-center h3 mb-3">הוספת משתמש</div>

                                {/*טופס הרשמה*/}
                                <form>
                                    {/*שם משתמש*/}
                                    <InputField
                                        labelOfInputField="שם משתמש"
                                        idOfInputField="form-username"
                                        updateFunction={(value) => {
                                            handleChange("username", value);
                                        }}
                                        inputType="text"
                                    />

                                    {/*סיסמה*/}
                                    <PasswordInputField
                                        labelOfInputField="סיסמה"
                                        idOfInputField="form-passwd"
                                        updateFunction={(value) => {
                                            handleChange("password", value);
                                        }}
                                    />

                                    {/*אישור סיסמה*/}
                                    <PasswordInputField
                                        labelOfInputField="אישור סיסמה"
                                        idOfInputField="form-confirm-passwd"
                                        updateFunction={(value) => {
                                            handleChange("confirmPassword", value);
                                        }}
                                    />

                                    {/*שליחה והפניה לדף ההתחברות*/}
                                    <div className="d-flex flex-column">
                                        <p className="error-message bold mx-auto mb-3">{error}</p>

                                        <button
                                            type="submit"
                                            onClick={(event) => {
                                                validateAndSubmit(event, setError);
                                            }}
                                            className="btn bg-dark-red darken-on-hover w-100 text-white fw-600 py-2 mb-4"
                                        >
                                            הרשמה
                                        </button>

                                        {/* <div className="mx-auto">
                                            <Link
                                                initialText="כבר יש לך חשבון?&nbsp;"
                                                linkText="התחבר"
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
