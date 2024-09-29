/** @format */

import { useParams } from "react-router-dom";
import Upper from "./TestStatusBar/TestStatusBar";
import StatusList from "./StatusList/StatusList";
import { fetchTest } from "../general/API";

import { useEffect, useState } from "react";

function TestStatus() {
    const { testLink } = useParams();

    const [test, setTest] = useState(null);
    const [query, setQuery] = useState("");

    useEffect(() => {
        fetchTest(testLink).then((fetchedTest) => {
            if (fetchedTest == null) {
                alert("Error fetching test");
                return;
            }
            setTest(fetchedTest);
        });
    }, testLink);

    if (test) {
        return (
            <main className="container-sm w-80 shadow mt-4 p-0 rounded-2">
                <div className="card border-0"> 
                    <Upper testName={test.name} doSearch={setQuery} />
                    <StatusList test={test} query={query}/>
                </div>
            </main>
        );
    }
    return null;

}

export default  TestStatus;
