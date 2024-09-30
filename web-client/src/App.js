/** @format */

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";
// import { fetchUser, fetchContacts } from "./components/shared/api";
// import { defaultUser } from "./components/shared/userApi";

import SoldierStatus from "./TestStatus/StatusList/SoldierStatus"
import StatusList from "./TestStatus/StatusList/StatusList";
import TestStatus from "./TestStatus/TestStatus";

import AddUser from "./AddUser/AddUser";
import SoldierTestProfile from "./SoldierTestProfile/SoldierTestProfile";
import AddSoldier from "./AddSoldier/AddSoldier";
import Homepage from "./Homepage/Homepage";
import Content from "./Content/Content";
import SoldierList from "./SoldierList/SoldierList";
import Setting from "./Setting/Setting";
import Login from "./Login/Login";
import SoldierProfile from "./SoldierProfile/SoldierProfile.js";
import AddCompany from "./AddCompany/AddCompany";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/AddCompany" element={<AddCompany />} />

                <Route path="/" element={<Login /> } />
                <Route path="/Home" element={<Homepage /> } />

                <Route path="/Settings" element={<Setting/> } />
                <Route path="/Settings/AddUser" element={ <AddUser /> } />
                <Route path="/Settings/AddSoldier" element={ <AddSoldier /> } />
                <Route path="/Settings/AddCompany" element={ <AddCompany /> } />

                <Route path="/Content/:contentLink" element={<Content/> } />
                <Route path="/Test/:testLink" element={<TestStatus/> } />
                <Route path="/Test/:testLink/:soldierID" element={<SoldierTestProfile/> } />

                <Route path="/Soldiers/:forceType/:id" element={<SoldierList /> } />
                <Route path="/Exceptions/:forceType/:id" element={<SoldierList exception={true}/> } />


                <Route path="/Soldier/:id" element={<SoldierProfile />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
