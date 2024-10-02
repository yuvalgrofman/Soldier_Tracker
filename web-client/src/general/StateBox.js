/** @format */

import { React, useRef } from "react";
import "./StateBox.css";

function StateBox({ state, text }) {
        let state_to_style = {
                "FAILED": "btn-danger",
                "PASSED": "btn-success",
                "UNTESTED": "btn-secondary",
                "EXCELLENT": "btn-warning", 

                "EXCEPTION": "btn-danger",
                "NORMAL" : "btn-success"
        }

        if (state in state_to_style) {
                const btnClass = `btn ${state_to_style[state]} disable state-box`;
                return (
                        <button type="button" class={btnClass}>{ text ? text : state }</button>
                );
        } 


        // If state not defined - return warning
        return (
                <button type="button" class="btn btn-black disable state-box"></button>
        );
}

export default StateBox;
