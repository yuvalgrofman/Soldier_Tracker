/** @format */

import SoldierStatus from "./TestStatus/StatusList/SoldierStatus"
import StatusList from "./TestStatus/StatusList/StatusList";
import TestStatus from "./TestStatus/TestStatus";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import Chat from "./components/Chat/Chat";
// import Login from "./components/Login/Login";
// import Register from "./components/Register/Register";
// import { fetchUser, fetchContacts } from "./components/shared/api";
// import { defaultUser } from "./components/shared/userApi";
import img from './images/omer1.jpeg'

function App() {


    let s1 = { name: "Yuval", id : 100, profilePic: img }
    let s2 = { name: "Noam", id : 90, profilePic: img }
    let s3 = { name: "Ariel", id : 80, profilePic: img }
    let s4 = { name: "Ohad", id : 70, profilePic: img }
    let s5 = { name: "Oded", id : 60, profilePic: img }
    let s6 = { name: "Valeria", id : 50, profilePic: img }

    let test = {
        name: "Test 1",
        soldiers: [
            s1,
            s2,
            s3,
            s4,
            s5,
            s6
        ],
        format: "HIGH",
        findBySoldierId: (id) => (id),
        excellent: 80,
        pass: 60
    }

    return (

        <TestStatus test={test} />
    );
}

export default App;
