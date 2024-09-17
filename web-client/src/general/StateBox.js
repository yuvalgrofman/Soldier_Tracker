/** @format */

import { React, useRef } from "react";
import "./StateBox.css";

function StateBox({ state }) {


    if (state === "FAIL") {
        return (
            <button type="button" class="btn btn-danger disable stateBoxCss"></button>
        );
    } else if (state === "PASS") {
        return (
            <button type="button" class="btn btn-success disable stateBoxCss"></button>
        );
    } else if (state === "UNTESTED") {
        return (
            <button type="button" class="btn btn-secondary disable stateBoxCss"></button>
        );
    } else if (state === "EXCELLENT") {
        return (
            <button type="button" class="btn btn-primary disable stateBoxCss"></button>
        );
    } else {
        return (
            <button type="button" class="btn btn-warning disable stateBoxCss"></button>
        ); 
    }
}

export default StateBox;
