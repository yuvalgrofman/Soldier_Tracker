// import img from '../general/omer1.jpg'
// import img from '../images/placeholder.png'
import img from '../images/image1.jpeg'

//  ------------------------------------------------------------------------------------------------

// All objectId fields are for testing, and are automatically created in MongoDB.
let s1 = { citizenshipID: 1 , objectId: 1 , armyID: 1 , name: "Yuval", section: "Sec 1", platoon: "Plat 1", company: "Yud", profilePic: img}
let s2 = { citizenshipID: 2 , objectId: 2 , armyID: 2 ,name: "Omri", section: "Sec 1", platoon: "Plat 1", company: "Yud",  profilePic: img }
let s3 = { citizenshipID: 3 , objectId: 3 , armyID: 3 ,name: "Yaakov", section: "Sec 1", platoon: "Plat 2", company: "Yud",  profilePic: img }
let s4 = { citizenshipID: 4 , objectId: 4 , armyID: 4 ,name: "Osher", section: "Sec 1", platoon: "Plat 2", company: "Yud",  profilePic: img }
let s5 = { citizenshipID: 5 , objectId: 5 , armyID: 5 ,name: "Oshri", section: "Sec 1", platoon: "Plat 2", company: "Yud",  profilePic: img }
let s6 = { citizenshipID: 6 , objectId: 6 , armyID: 6 ,name: "Tamir", section: "Sec 2", platoon: "Plat 2", company: "Yud", profilePic: img }
let s7 = { citizenshipID: 7 , objectId: 7 , armyID: 7 ,name: "Ilay", section: "Sec 2", platoon: "Plat 1", company: "Yud",  profilePic: img }
let s8 = { citizenshipID: 8, objectId: 8, armyID: 8, name: "Yair", section: "Sec 2", platoon: "Plat 1", company: "Yud",  profilePic: img }
let s9 = { citizenshipID: 9 , objectId: 9 , armyID: 9 ,name: "Itay", section: "Sec 2", platoon: "Plat 1", company: "Yud",  profilePic: img }
let s10 = { citizenshipID: 10, objectId: 10, armyID: 10 ,name: "Liav", section: "Sec 2", platoon: "Plat 2", company: "Yud", profilePic: img }
let s11 = { citizenshipID: 11, objectId: 11, armyID: 11 ,name: "Nachshon", section: "Sec 3", platoon: "Plat 2", company: "Yud",  profilePic: img }
let s12 = { citizenshipID: 12, objectId: 12, armyID: 12, name: "Yonatan", section: "Sec 3", platoon: "Plat 1", company: "Yud", profilePic: img }

let soldiers = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12]

// Result saves soldiers by their armyID
let r11 = { objectId: 101, testName: "Test 1", soldierID: 1, score: 100, isCompleted: true }
let r12 = { objectId: 103, testName: "Test 1", soldierID: 2, score: 70, isCompleted: true }
let r13 = { objectId: 104, testName: "Test 1", soldierID: 3, score: 50, isCompleted: false }

let r21 = { objectId: 102, testName: "Test 2", soldierID: 1, score: 95, isCompleted: true }

let test1 = {
    name: "TestOne",
    type: "HIGH",
    excellent: 80,
    pass: 60,
    results: [ 101, 103, 104 ] // Real objectIds aren't numbers, it's for testing...
}

// ------------------------------------------------------------------------------------------------

let sect1 = { name: "Section 1", soldierIds: [1, 2], commander: "MC 1" }
let sect2 = { name: "Section 2", soldierIds: [3, 4], commander: "MC 2" }
let sect3 = { name: "Section 3", soldierIds: [5, 6], commander: "MC 3" }
let sect4 = { name: "Section 4", soldierIds: [7, 8], commander: "MC 4" }
let sect5 = { name: "Section 5", soldierIds: [9, 10], commander: "MC 5" }
let sect6 = { name: "Section 6", soldierIds: [11, 12], commander: "MC 6" }

let plat1 = { name: "Platoon 1", sectionIds: [1, 2], commander: "MM 1" }
let plat2 = { name: "Platoon 2", sectionIds: [3, 4], commander: "MM 2" }
let plat3 = { name: "Platoon 3", sectionIds: [5, 6], commander: "MM 3" }

let comp1 = { name: "Company 1", platoonIds: [1, 2], commander: "MC 1" }

//  ------------------------------------------------------------------------------------------------

let testDisplay1 = { name: "10 Meter Range", link: "10MeterRange" }
let testDisplay2 = { name: "25 Meter Range", link: "25MeterRange" }
let testDisplay3 = { name: "50 Meter Range", link: "50MeterRange" }

let testDisplay4 = { name: "Shooting Positions", link: "ShootingPositions" }
let testDisplay5 = { name: "Shooting & Walking", link: "ShootingWalking" }
let testDisplay6 = { name: "Shooting At Night", link: "ShootingAtNight" }

let testDisplay7 = { name: "Running", link: "Running" }
let testDisplay8 = { name: "Sprints", link: "Sprints" }
let testDisplay9 = { name: "Obstacle Course", link: "ObstacleCourse" }

let testDisplay10 = { name: "Clearing Buildings", link: "ClearingBuildings" }
let testDisplay11 = { name: "Room Clearing", link: "RoomClearing" }
let testDisplay12 = { name: "Urban Combat", link: "UrbanCombat" }

let testDisplay13 = { name: "Trench Warfare", link: "TrenchWarfare" }
let testDisplay14 = { name: "Open Field Combat", link: "OpenFieldCombat" }
let testDisplay15 = { name: "Warfare In Forests", link: "WarfareInForests" }

let contentDisplay1 = { name: "Shooting 1", link: "ShootingOne", tests: [testDisplay1, testDisplay2, testDisplay3] }
let contentDisplay2 = { name: "Shooting 2", link: "ShootingTwo", tests: [testDisplay4, testDisplay5, testDisplay6] }
let contentDisplay3 = { name: "Physical Exams", link: "Physical", tests: [testDisplay7, testDisplay8, testDisplay9] }
let contentDisplay4 = { name: "Urban Warfare", link: "Urban", tests: [testDisplay10, testDisplay11, testDisplay12] }
let contentDisplay5 = { name: "Open Warfare", link: "Open", tests: [testDisplay13, testDisplay14, testDisplay15] }

const contents = [contentDisplay1, contentDisplay2, contentDisplay3, contentDisplay4, contentDisplay5]

// ------------------------------------------------------------------------------------------------

let settingsDisplay1 = { name: "Add Soldier", link: "AddSoldier" }
let settingsDisplay2 = { name: "Add User", link: "AddUser" }
// let settingsDisplay3 = { name: "Add Section", link: "AddSection" }

let settingDisplay = { name: "Settings", link: "Settings", tests: [ settingsDisplay1, settingsDisplay2 ] }

//------------------------------------------------------------------------------------------------
// FETCH:

function fetchSettingDisplays() {
    return settingDisplay;
}

function fetchContentDisplays() {
    return contents;
}

function fetchContentDisplay(contentLink) {
    return contents.find(c => c.link === contentLink);
}

function fetchTestDisplay(contentLink, testLink) {
    return contents.find(c => c.link === contentLink).tests.find(t => t.link === testLink);
}

async function fetchTest(testName) {
    return test1;
    // const res = await fetch("http://127.0.0.1:5022/api/Tests/ + testName", {
    //     method: "GET",
    // });
    
    // if (!res.ok) return null;

    // return JSON.parse(await res.text());
}

async function fetchTestResults(test) {
    return [r11, r12, r13];
}

async function fetchSoldier(armyID) {
    // const res = await fetch("http://127.0.0.1:5022/api/Soldiers/" + armyID, {
    //     method: "GET",
    // });

    // if (!res.ok) return null;

    // return JSON.parse(await res.text());

    let ss = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12]
    for (const s of ss) {
        if (s.armyID == armyID) {
            return s
        }
    }
}

async function fetchSoldiers(armyIDList) {
    let ss = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12]
    let res = []
    for (const s of ss) {
        if (armyIDList.includes(s.armyID)) {
            res.push(s)
        }
    }
    return res
}

async function fetchSectionSoldiers(sectionID) {
    let sectionMap = {
        1: [s1, s2],
        2: [s3, s4],
        3: [s5, s6],
        4: [s7, s8],
        5: [s9, s10],
        6: [s11, s12],
    }
    return sectionMap[sectionID];
} 

async function fetchPlatoonSoldiers(platoonID) {
    let platoonMap = {
        1: [s1, s2, s3, s4],
        2: [s5, s6, s7, s8],
        3: [s9, s10, s11, s12],
    }
    return platoonMap[platoonID];
}

async function fetchCompanySoldiers(companyID) {
    return [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12]
}


async function fetchResultByTestAndSoldier(testName, soldierID) {
    // const res = await fetch("http://127.0.0.1:5022/api/Results/" + testName + "-" + soldierID, {
    //     method: "GET",
    // });
    //
    // if (!res.ok) return null;
    //
    // return JSON.parse(await res.text());
    return r11
}

async function fetchContentTest(contentName) {
    return 
}

// ------------------------------------------------------------------------------------------------
// POST:

async function postSoldierToSection(sectionID, soldierID) {
    // const res = await fetch("http://127.0.0.1:5022/api/Force/addSoldier/", {
    //     method: "POST",
    //     body: JSON.stringify({ soldierID, sectionID }),
    // });
    
    // if (!res.ok) return null;
}

async function postPlatoon(platoon) {
    const response = await fetch("http://127.0.0.1:5022/api/Force/platoon/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(platoon),
    });

    return response;
}

async function postResult(testName, soldierId, score) {
    // const response = await fetch("http://127.0.0.1:5022/api/Result/", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({testName, soldierId, score}),
    // });
    //
    // return response;
    return;
}

async function postCompany(company) {
    const response = await fetch("http://127.0.0.1:5022/api/Force/company/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(company),
    });

    return response;
}

async function postSection(section) {
    const response = await fetch("http://127.0.0.1:5022/api/Force/section/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(section),
    });

    return response;
}

async function postSoldier(soldier) {
    if (soldier.name == "Yuval")
        return { status: 409 }
    return {}

    // const response = await fetch("http://127.0.0.1:5022/api/Soldiers", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(soldier),
    // });

    // return response;
}

async function postUser(user) {
    if (user.name == "Yuval")
        return { status: 409 }
    return {}

    // const response = await fetch("http://127.0.0.1:5022/api/Users", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(user),
    // });

    // return response;
}

async function postVerifyUser(username, password) {
    const response = await fetch("http://127.0.0.1:5022/api/Users/verify", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({username, password}),
    });

    return response;
}


export {
    fetchTest, fetchSoldier, fetchResultByTestAndSoldier, fetchTestResults, fetchSoldiers,
    fetchContentDisplays, fetchContentDisplay, fetchTestDisplay, fetchContentTest, fetchSettingDisplays,
    fetchCompanySoldiers, fetchPlatoonSoldiers, fetchSectionSoldiers,
    postSoldier, postUser, postResult, postSection, postPlatoon, postCompany,
    postSoldierToSection, postVerifyUser, 
    // For testing:
    s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, test1, r11, r21 , r13, r12}