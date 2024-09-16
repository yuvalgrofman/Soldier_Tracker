/** @format */

import { React, useRef } from "react";
import { getReformattedDate } from "../../../shared/userApi.js";

function StateBox({ state }) {


        if (state === "FAILED") {
            return (
                <button type="button" class="btn btn-danger disable"></button>
            );
        } else if (state === "PASSED") {
            return (
                <button type="button" class="btn btn-success disable"></button>
            );
        } else if (state === "UNTESTED") {
            return (
                <button type="button" class="btn btn-secondary disable"></button>
            ); 
        } else {
            return (
                <button type="button" class="btn btn-warning disable"></button>
            ); 
        }
}

export default StateBox;
