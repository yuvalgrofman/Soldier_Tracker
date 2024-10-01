import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css'
import InputField from "../general/InputField";

const WeekViewRow = ({gantt}) => {

    const titles = ["Subject", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const titlesLower = ["subject", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
    return (
        <div className="row bg-light-gray">
            <div className="p-0 h5 text-center fw-bold mb-0">
                <div className="row">
                    {[...Array(8)].map((_, j) => (
                        <div className="p-0 pb-3 w-12p5 col-3 border border-1 border-secondary">
                            {gantt[titlesLower[j]]}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WeekViewRow;