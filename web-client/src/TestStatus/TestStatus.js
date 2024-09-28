/** @format */

import { useParams } from "react-router-dom";
import Upper from "./TestStatusBar/TestStatusBar";
import StatusList from "./StatusList/StatusList";
import { fetchTest } from "../general/API";

import { useEffect, useState } from "react";

function TestStatus() {
    const { testName } = useParams();

    const [test, setTest] = useState({
        name: "Null",
        type: "HIGH",
        findBySoldierId: (id) => null,
        excellent: 0,
        pass: 0,
        results: [ ] // Real objectIds aren't numbers, it's for testing...
    });

    useEffect(() => {
        fetchTest(testName).then((fetchedTest) => {
            if (fetchedTest == null) {
                alert("Error fetching test");
                return;
            }
            setTest(fetchedTest);
        });
    }, testName);

    return (
        <main className="container-sm w-80 shadow mt-4 p-0 rounded-2">
            <div className="card border-0"> 
                <Upper testName={test.name} />
                <StatusList test={test} />
            </div>
        </main>
    );
}

export default  TestStatus;
