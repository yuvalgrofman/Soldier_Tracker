/** @format */

import Upper from "./TestStatusBar/TestStatusBar";
import StatusList from "./StatusList/StatusList";

function TestStatus({ test }) {

    return (
        <main className="container-sm w-80 shadow mt-4 p-0 rounded-2">
            <div className="card border-0"> 
                <Upper test={test} />
                <StatusList test={test} />
            </div>
        </main>
    );
}

export default  TestStatus;
