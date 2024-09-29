import profilePic1 from "../images/s1.jpeg"
import profilePic2 from "../images/s2.jpeg"
import profilePic3 from "../images/s3.jpeg"
import profilePic4 from "../images/s4.jpeg"

//  ------------------------------------------------------------------------------------------------

let s1 = {
    name: "Yuval", citizenshipID: 1, armyID: 1, profilePic: profilePic1, section: "1", platoon: "1",
    company: "Yud", address: "Ben Gurion 28", medicalProfile: 97, rightHanded: true, packal: "Negev",
    religion: "Jewish", sensitivities: "None", exception: false
}

let s2 = {
    name: "Omri", citizenshipID: 2, armyID: 2, profilePic: profilePic2, section: "1", platoon: "1",
    company: "Yud", address: "Ben Gurion 28", medicalProfile: 97, rightHanded: true, packal: "Negev",
    religion: "Jewish", sensitivities: "None", exception: false
}

let s3 = {
    name: "Yaakov", citizenshipID: 3, armyID: 3, profilePic: profilePic3, section: "1", platoon: "2",
    company: "Yud", address: "Ben Gurion 28", medicalProfile: 97, rightHanded: true, packal: "Negev",
    religion: "Jewish", sensitivities: "None", exception: true 
}

let s4 = {
    name: "Osher", citizenshipID: 4, armyID: 4, profilePic: profilePic4, section: "1", platoon: "2",
    company: "Yud", address: "Ben Gurion 28", medicalProfile: 97, rightHanded: true, packal: "Negev",
    religion: "Jewish", sensitivities: "None", exception: false
}

let s5 = {
    name: "Oshri", citizenshipID: 5, armyID: 5, profilePic: profilePic1, section: "1", platoon: "2",
    company: "Yud", address: "Ben Gurion 28", medicalProfile: 97, rightHanded: true, packal: "Negev",
    religion: "Jewish", sensitivities: "None", exception: false
}

let s6 = {
    name: "Tamir", citizenshipID: 6, armyID: 6, profilePic: profilePic2, section: "2", platoon: "2",
    company: "Yud", address: "Ben Gurion 28", medicalProfile: 97, rightHanded: true, packal: "Negev",
    religion: "Jewish", sensitivities: "None", exception: true
}

let s7 = {
    name: "Ilay", citizenshipID: 7, armyID: 7, profilePic: profilePic3, section: "2", platoon: "1",
    company: "Yud", address: "Ben Gurion 28", medicalProfile: 97, rightHanded: true, packal: "Negev",
    religion: "Jewish", sensitivities: "None", exception: false
}

let s8 = {
    name: "Yair", citizenshipID: 8, armyID: 8, profilePic: profilePic4, section: "2", platoon: "1",
    company: "Yud", address: "Ben Gurion 28", medicalProfile: 97, rightHanded: true, packal: "Negev",
    religion: "Jewish", sensitivities: "None", exception: false
}

let s9 = {
    name: "Itay", citizenshipID: 9, armyID: 9, profilePic: profilePic1, section: "2", platoon: "1",
    company: "Yud", address: "Ben Gurion 28", medicalProfile: 97, rightHanded: true, packal: "Negev",
    religion: "Jewish", sensitivities: "None", exception: false
}

let s10 = {
    name: "Liav", citizenshipID: 10, armyID: 10, profilePic: profilePic2, section: "2", platoon: "2",
    company: "Yud", address: "Ben Gurion 28", medicalProfile: 97, rightHanded: true, packal: "Negev",
    religion: "Jewish", sensitivities: "None", exception: false
}

let s11 = {
    name: "Nachshon", citizenshipID: 11, armyID: 11, profilePic: profilePic3, section: "3", platoon: "2",
    company: "Yud", address: "Ben Gurion 28", medicalProfile: 97, rightHanded: true, packal: "Negev",
    religion: "Jewish", sensitivities: "None", exception: true
}

let s12 = {
    name: "Yonatan", citizenshipID: 12, armyID: 12, profilePic: profilePic4, section: "3", platoon: "1",
    company: "Yud", address: "Ben Gurion 28", medicalProfile: 97, rightHanded: true, packal: "Negev",
    religion: "Jewish", sensitivities: "None", exception: true
}

// ------------------------------------------------------------------------------------------------

let r1 = { objectId: 101, testName: "10 Meters", soldierID: 1, score: 100, isCompleted: true, status: "EXCELLENT" };
let r2 = { objectId: 102, testName: "25 Meters", soldierID: 1, score: 80, isCompleted: true, status: "PASSED" };
let r3 = { objectId: 103, testName: "50 Meters", soldierID: 1, score: 70, isCompleted: true, status: "FAILED" };

// ------------------------------------------------------------------------------------------------

// Result saves soldiers by their armyID
let r11 = { objectId: 101, testName: "25 Meters", soldierID: 1, score: 100, isCompleted: true }
let r12 = { objectId: 103, testName: "25  Meters", soldierID: 2, score: 70, isCompleted: true }
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

let comp1 = { name: "Company 1", platoonIds: [7, 8, 9], commander: "MC 1" }

// ------------------------------------------------------------------------------------------------
// Fetch:

async function fetchTest(testLink) {
    return test1;
    // const res = await fetch("http://127.0.0.1:5022/api/Tests/ + testName", {
    //     method: "GET",
    // });
    
    // if (!res.ok) return null;

    // return JSON.parse(await res.text());
}

async function fetchTestResults(testLink) {
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

async function fetchResultByTestAndSoldier(testLink, soldierID) {
    // const res = await fetch("http://127.0.0.1:5022/api/Results/" + testName + "-" + soldierID, {
    //     method: "GET",
    // });
    //
    // if (!res.ok) return null;
    //
    // return JSON.parse(await res.text());
    return r11
}

async function fetchSoldierResults(soldierId) {
    return [r1, r2, r3];
}

async function fetchSection(sectionID) {
    let sectionMap = {
        1: sect1,
        2: sect2,
        3: sect3,
        4: sect4,
        5: sect5,
        6: sect6,
    }
    return sectionMap[sectionID];
}

async function fetchPlatoon(platoonID) {
    let platoonMap = {
        7: plat1,
        8: plat2,
        9: plat3,
    }
    return platoonMap[platoonID];
}

async function fetchCompany(companyID) {
    return comp1;
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

async function postResult(testLink, soldierId, score) {
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
    fetchCompanySoldiers, fetchPlatoonSoldiers, fetchSectionSoldiers, fetchSoldierResults,
    fetchCompany, fetchPlatoon, fetchSection,
    postSoldier, postUser, postResult, postSection, postPlatoon, postCompany,
    postSoldierToSection, postVerifyUser, 
    // For testing:
    s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, test1, r11, r21 , r13, r12}