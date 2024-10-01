import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
const rootb = document.documentElement;

//base angle for diagonal based on window size
let baseDiagonalAngle = Math.atan(window.innerHeight / window.innerWidth);
let mouseAngDiv = 0;
let diagonalAngle = baseDiagonalAngle + mouseAngDiv;
rootb.style.setProperty("--diag-ang", diagonalAngle + "rad");
window.addEventListener('resize', evt => {
    baseDiagonalAngle = Math.atan(window.innerHeight / window.innerWidth);
    diagonalAngle = baseDiagonalAngle + mouseAngDiv;
    rootb.style.setProperty("--diag-ang", diagonalAngle + "rad");
})

//angle shift based on mouse position
document.addEventListener("mousemove", evt => {
    let x = (evt.clientX / window.innerWidth);
    let y = (evt.clientY / window.innerHeight);
    let mouseAng = Math.atan(y / x);
    mouseAngDiv = mouseAng / 50;
    diagonalAngle = baseDiagonalAngle + mouseAngDiv;
    rootb.style.setProperty("--diag-ang", diagonalAngle + "rad");
})

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
