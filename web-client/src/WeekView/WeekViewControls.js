import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css'

const WeekViewControls = ({weekNum, company}) => {
    const navigate = useNavigate();

    return (
        <div className="row bg-light-gray h4 text-center fw-bold mb-0">
            <div className="p-0 pb-0 col-4 border border-1 border-secondary">
                <button
                    className="btn darken-on-hover fs-2 fw-bold btn-block w-100 rounded-0 bg-gray"
                    onClick={()=> {
                        navigate(`/Schedule/` + company + "/" + (Math.max(1, Number(weekNum) - 1)).toString())
                    }}
                >
                    {"<"}
                </button>
            </div>
            <div className="p-0 pb-0 col-4 border fs-2 fw-bold border-1 border-secondary">
                {"Week " + weekNum.toString()}
            </div>
            <div className="p-0 pb-0 col-4 border border-1 border-secondary">
                <button
                    className="btn darken-on-hover fs-2 fw-bold btn-block w-100 rounded-0 bg-gray"
                    onClick={()=> {
                        navigate(`/Schedule/` + company + "/" + (Number(weekNum) + 1).toString())
                    }}
                >
                    {">"}
                </button>
            </div>
        </div>
    );
};

export default WeekViewControls;