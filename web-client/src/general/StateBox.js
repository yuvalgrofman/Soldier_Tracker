/** @format */

import { React, useRef } from "react";
import { getReformattedDate } from "../../../shared/userApi.js";

function StateBox({ state }) {
        state_to_style = {
                "FAILED": "btn-danger",
                "PASSED": "btn-success",
                "UNTESTED": "btn-secondary",
        }

        if (state in state_to_style) {
                return (
                        <button type="button" class=`btn ${state_to_style[state]} disable`></button>
                );
        } 

        // If state not defined - return warning
        return (
                <button type="button" class="btn btn-warning disable"></button>
        );
}

export default StateBox;
