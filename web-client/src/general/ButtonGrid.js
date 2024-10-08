import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ButtonGrid.css'
import '../index.css'

const ButtonGrid = ({ buttonNames, buttonPages, pagesURL }) => {
  const navigate = useNavigate();

  const handleButtonClick = (route) => {
    if (pagesURL) {
      navigate(`/${pagesURL}/${route}`);
    } else {
      navigate(route);
    }
  };

  return (
      <div className="card border-0" id="buttonGridCard">
        <div className="row mt-3 g-0">
          {buttonNames.map((name, index) => (
            <div className="col-6 mb-3 d-flex justify-content-center align-items-center" key={index}>
              <button
                className="btn darken-on-hover btn-block rounded-4 w-80 bg-dark-red  gridButton"
                onClick={() => handleButtonClick(buttonPages[index])}
              >
                {name}
              </button>
            </div>
          ))}
        </div>
      </div>
  );
};

export default ButtonGrid;