import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomepageBar.css'; // Custom CSS for additional styling

const HomepageBar = ({ buttonNames, buttonPages }) => {
  const navigate = useNavigate();

  const handleButtonClick = (route) => {
    navigate(route);
  };

  return (
    <div className="homepage-bar d-flex">
      {buttonNames.map((name, index) => (
        <div
          key={index}
          className="homepage-bar-item d-flex justify-content-center align-items-center"
          onClick={() => handleButtonClick(buttonPages[index])}
        >
          {name}
        </div>
      ))}
    </div>
  );
};

export default HomepageBar;
