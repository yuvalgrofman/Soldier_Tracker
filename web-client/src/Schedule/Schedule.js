import React from 'react';
import ButtonGrid from '../general/ButtonGrid';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchContentDisplay } from '../general/Display';
import WeekViewBar from "../WeekView/WeekViewBar";
import WeekViewRow from "../WeekView/WeekViewRow";
import WeekViewControls from "../WeekView/WeekViewControls";
import {fetchBoard} from "../general/API"

async function getBoard(company, weekNum) {
    return await fetchBoard(company, weekNum);
}


function Schedule() {
    const { weekNum, company } = useParams();

    // For testing
    const gantt = {
        subject: "Running",
        sunday: "2km run",
        wednesday: "500m x 4 run",
        thursday: "1.5km run",
        saturday: "3km run",
    }

    const gantt2 = {
        subject: "Safety",
        sunday: "Safety hour",
    }

    const gantt3 = {
        subject: "Digital Campus",
        monday: "3 videos about ...",
        tuesday: "test ...",
        friday: "two tests about ...",
        saturday: "video about ...",
    }

    const [ganttData, setGanttData] = useState([]);

    useEffect(() => {
        // Fetch the board data asynchronously when the component mounts
        getBoard(company, weekNum).then((gantt) => {
            setGanttData(gantt); // Store the resolved data in state
        });
    }, [company, weekNum]);

    return (
        <main className="container-sm w-80 shadow mt-4 p-0 rounded-2">
            <div className = "card-header d-flex flex-column align-items-center bg-light-gray title-bar">
                <span className="d-flex justify-content-center h4 w-100 fw-bold">Schedule</span>
            </div>

            <WeekViewControls weekNum={weekNum} company={company} />
            <WeekViewBar/>

            {/* When making it input instead of text, onChange may use the updateGantt function from the API */}
            {ganttData.map((gantt, index) => (
                <WeekViewRow key={index} gantt={gantt} />
            ))}

        </main>
    );
}

export default Schedule;