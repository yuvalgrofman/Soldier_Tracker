/** @format */

import { React, useRef } from "react";
import "./StateBox.css";

function StateBox({ state }) {
        let state_to_style = {
                "FAILED": "btn-danger",
                "PASSED": "btn-success",
                "UNTESTED": "btn-secondary",
                "EXCELLENT": "btn-success"
        }

        if (state in state_to_style) {
                const btnClass = `btn ${state_to_style[state]} disable`;
                return (
                        <button type="button" class={btnClass}>{state}</button>
                );
        } 


        // If state not defined - return warning
        return (
                <button type="button" class="btn btn-warning disable"></button>
        );
}

export default StateBox;
