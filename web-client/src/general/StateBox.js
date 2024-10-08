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

        let to_hebrew = {
                "FAILED": "נכשל",
                "PASSED": "עובר",
                "UNTESTED": "לא נבחן",
                "EXCELLENT": "מצטיין", 

                "EXCEPTION": "חריג",
                "NORMAL" : "תקין"
        }

        if (state in state_to_style) {
                const style = {
                        'width': 'fit-content',
                }
                const btnClass = `btn ${state_to_style[state]} disable state-box `;
                return (
                        <button type="button" style={style} class={btnClass}>{ text ? text : to_hebrew[state] }</button>
                );
        } 


        // If state not defined - return warning
        return (
                <button type="button" class="btn btn-black disable state-box"></button>
        );
}

export default StateBox;
