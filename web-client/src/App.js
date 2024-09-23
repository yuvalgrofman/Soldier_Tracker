/** @format */

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";
// import { fetchUser, fetchContacts } from "./components/shared/api";
// import { defaultUser } from "./components/shared/userApi";

import SoldierStatus from "./TestStatus/StatusList/SoldierStatus"
import StatusList from "./TestStatus/StatusList/StatusList";
import TestStatus from "./TestStatus/TestStatus";

import img from './images/omer1.jpeg'
import AddUser from "./AddUser/AddUser";
import SoldierTestProfile from "./SoldierTestProfile/SoldierTestProfile";
import AddSoldier from "./AddSoldier/AddSoldier";
import ButtonGrid from "./general/ButtonGrid";
import Homepage from "./Homepage/Homepage";
import Content from "./Content/Content";
import SoldierList from "./SoldierList/SoldierList";

function App() {

        let s1 = { id: 1, armyID: 1 , name: "Yuval", grade : 100, profilePic: img}
        let s2 = { id: 2, armyID: 2 ,name: "Omri", grade : 90, profilePic: img }
        let s3 = { id: 3, armyID: 3 ,name: "Yaakov", grade : 80, profilePic: img }
        let s4 = { id: 4, armyID: 4 ,name: "Osher", grade : 70, profilePic: img }
        let s5 = { id: 5, armyID: 5 ,name: "Oshri", grade : 60, profilePic: img }
        let s6 = { id: 6, armyID: 6 ,name: "Tamir", grade: 50, profilePic: img }
        let s7 = { id: 3, armyID: 7 ,name: "Ilay", grade : 80, profilePic: img }
        let s8 = { id: 4, armyID: 8, name: "Yair", grade : 70, profilePic: img }
        let s9 = { id: 5, armyID: 9 ,name: "Itay", grade : 60, profilePic: img }
        let s10 = { id: 6, armyID: 10 ,name: "Liav", grade: 50, profilePic: img }
        let s11 = { id: 3, armyID: 11 ,name: "Nachshon", grade : 80, profilePic: img }
        let s12 = { id: 4, armyID: 12, name: "Yonatan", grade : 70, profilePic: img }

        let test = {
            name: "Test 1",
            soldiers: [
                s1, s2, s3, s4,  s5,  s6,
                s7, s8, s9, s10, s11, s12
            ],
            format: "HIGH",
            findBySoldierId: (id) => test.soldiers.find((s) => (s.id == id)),
            excellent: 80,
            pass: 60
        }

    let buttonNames = ["Add Soldier", "Create Company", "akjdhakjdhakjdhakj Daskjdhakjdhakjdh", "B4", "B5", "B6"]
    let buttonPages = ["B1", "B2", "B3", "B4", "B5", "B6"]
    let soldiers = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12]

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Home" element={<Homepage test={test} /> } />
                <Route path="/AddUser" element={ <AddUser /> } />
                <Route path="/AddSoldier" element={ <AddSoldier /> } />
                {/* <Route path="/" element={<ButtonGrid buttonNames={buttonNames} buttonPages={buttonPages} /> } /> */}
                {/* <Route path="/" element={<TestStatus test={test} /> } /> */}
                <Route path="/SoldierTestProfile" element={<SoldierTestProfile testName={test.name} soldierID={s1.id} /> } />
                {/* <Route path="/" element={<Content testNames={buttonNames} testPages = {buttonPages}/> } /> */}
                {/* <Route path="/" element={<SoldierList soldiers={soldiers}/> } /> */}

            </Routes>
        </BrowserRouter>
    );
}

export default App;
