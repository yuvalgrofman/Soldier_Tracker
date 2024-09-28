/** @format */

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";
// import { fetchUser, fetchContacts } from "./components/shared/api";
// import { defaultUser } from "./components/shared/userApi";

import SoldierStatus from "./TestStatus/StatusList/SoldierStatus"
import StatusList from "./TestStatus/StatusList/StatusList";
import TestStatus from "./TestStatus/TestStatus";

import {s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, test1, r11, r21 , r13, r12} from "./general/API.js"
import AddUser from "./AddUser/AddUser";
import SoldierTestProfile from "./SoldierTestProfile/SoldierTestProfile";
import AddSoldier from "./AddSoldier/AddSoldier";
import ButtonGrid from "./general/ButtonGrid";
import Homepage from "./Homepage/Homepage";
import Content from "./Content/Content";
import SoldierList from "./SoldierList/SoldierList";
import Setting from "./Setting/Setting";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Home" element={<Homepage /> } />
                {/* <Route path="/" element={<ButtonGrid buttonNames={buttonNames} buttonPages={buttonPages} /> } /> */}
                <Route path="/Settings" element={<Setting/> } />
                <Route path="/Settings/AddUser" element={ <AddUser /> } />
                <Route path="/Settings/AddSoldier" element={ <AddSoldier /> } />

                <Route path="/Content/:contentLink" element={<Content/> } />
                <Route path="/Test/:testLink" element={<TestStatus/> } />
                <Route path="/Test/:testName/:soldierID" element={<SoldierTestProfile/> } />
                <Route path="/Soldiers/:force/:id" element={<SoldierList /> } />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
