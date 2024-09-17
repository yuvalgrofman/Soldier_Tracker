/** @format */

import Upper from "./Upper/Upper";
import StatusList from "./StatusList/StatusList";

// import { React, useRef } from "react";
// import { getReformattedDate } from "../../../shared/userApi.js";

function TestStatus({ test }) {

    return (
        <main className="container w-80 shadow mt-4 p-0 rounded-2" id="chat-app">
            <div className="card border-0"> 
                <Upper test={test} />
                <StatusList test={test} />
            </div>
        </main>
    );
}

export default  TestStatus;
