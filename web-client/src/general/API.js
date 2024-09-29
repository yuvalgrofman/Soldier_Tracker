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
    name: "Yaakov", citizenshipID: 3, armyID: 3, profilePic: profilePic3, section: "2", platoon: "1",
    company: "Yud", address: "Ben Gurion 28", medicalProfile: 97, rightHanded: true, packal: "Negev",
    religion: "Jewish", sensitivities: "None", exception: true 
}

let s4 = {
    name: "Osher", citizenshipID: 4, armyID: 4, profilePic: profilePic4, section: "2", platoon: "1",
    company: "Yud", address: "Ben Gurion 28", medicalProfile: 97, rightHanded: true, packal: "Negev",
    religion: "Jewish", sensitivities: "None", exception: false
}

let s5 = {
    name: "Oshri", citizenshipID: 5, armyID: 5, profilePic: profilePic1, section: "1", platoon: "2",
    company: "Yud", address: "Ben Gurion 28", medicalProfile: 97, rightHanded: true, packal: "Negev",
    religion: "Jewish", sensitivities: "None", exception: false
}

let s6 = {
    name: "Tamir", citizenshipID: 6, armyID: 6, profilePic: profilePic2, section: "1", platoon: "2",
    company: "Yud", address: "Ben Gurion 28", medicalProfile: 97, rightHanded: true, packal: "Negev",
    religion: "Jewish", sensitivities: "None", exception: true
}

let s7 = {
    name: "Ilay", citizenshipID: 7, armyID: 7, profilePic: profilePic3, section: "1", platoon: "2",
    company: "Yud", address: "Ben Gurion 28", medicalProfile: 97, rightHanded: true, packal: "Negev",
    religion: "Jewish", sensitivities: "None", exception: false
}

let s8 = {
    name: "Yair", citizenshipID: 8, armyID: 8, profilePic: profilePic4, section: "1", platoon: "2",
    company: "Yud", address: "Ben Gurion 28", medicalProfile: 97, rightHanded: true, packal: "Negev",
    religion: "Jewish", sensitivities: "None", exception: false
}

let s9 = {
    name: "Itay", citizenshipID: 9, armyID: 9, profilePic: profilePic1, section: "1", platoon: "3",
    company: "Yud", address: "Ben Gurion 28", medicalProfile: 97, rightHanded: true, packal: "Negev",
    religion: "Jewish", sensitivities: "None", exception: false
}

let s10 = {
    name: "Liav", citizenshipID: 10, armyID: 10, profilePic: profilePic2, section: "1", platoon: "3",
    company: "Yud", address: "Ben Gurion 28", medicalProfile: 97, rightHanded: true, packal: "Negev",
    religion: "Jewish", sensitivities: "None", exception: false
}

let s11 = {
    name: "Nachshon", citizenshipID: 11, armyID: 11, profilePic: profilePic3, section: "2", platoon: "3",
    company: "Yud", address: "Ben Gurion 28", medicalProfile: 97, rightHanded: true, packal: "Negev",
    religion: "Jewish", sensitivities: "None", exception: true
}

let s12 = {
    name: "Yonatan", citizenshipID: 12, armyID: 12, profilePic: profilePic4, section: "2", platoon: "3",
    company: "Yud", address: "Ben Gurion 28", medicalProfile: 97, rightHanded: true, packal: "Negev",
    religion: "Jewish", sensitivities: "None", exception: true
}

// ------------------------------------------------------------------------------------------------

let r11 = { objectId: 101, testName: "10 Meters", soldierID: 1, score: 100, isCompleted: true, status: "EXCELLENT" };
let r12 = { objectId: 102, testName: "25 Meters", soldierID: 1, score: 80, isCompleted: true, status: "PASSED" };
let r13 = { objectId: 103, testName: "50 Meters", soldierID: 1, score: 70, isCompleted: true, status: "FAILED" };

let r21 = { objectId: 104, testName: "10 Meters", soldierID: 2, score: 90, isCompleted: true, status: "EXCELLENT" };
let r22 = { objectId: 105, testName: "25 Meters", soldierID: 2, score: 70, isCompleted: true, status: "FAILED" };
let r23 = { objectId: 106, testName: "50 Meters", soldierID: 2, score: 60, isCompleted: true, status: "FAILED" };

let r31 = { objectId: 107, testName: "10 Meters", soldierID: 3, score: 80, isCompleted: true, status: "PASSED" };
let r32 = { objectId: 108, testName: "25 Meters", soldierID: 3, score: 60, isCompleted: true, status: "FAILED" };
let r33 = { objectId: 109, testName: "50 Meters", soldierID: 3, score: 50, isCompleted: true, status: "FAILED" };

let r41 = { objectId: 110, testName: "10 Meters", soldierID: 4, score: 97, isCompleted: true, status: "EXCELLENT" };
let r42 = { objectId: 111, testName: "25 Meters", soldierID: 4, score: 94, isCompleted: true, status: "EXCELLENT" };
let r43 = { objectId: 112, testName: "50 Meters", soldierID: 4, score: 32, isCompleted: true, status: "FAILED" };

let r51 = { objectId: 113, testName: "10 Meters", soldierID: 5, score: 91, isCompleted: true, status: "EXCELLENT" };
let r52 = { objectId: 114, testName: "25 Meters", soldierID: 5, score: 78, isCompleted: true, status: "FAILED" };
let r53 = { objectId: 115, testName: "50 Meters", soldierID: 5, score: 82, isCompleted: true, status: "FAILED" };

let r61 = { objectId: 116, testName: "10 Meters", soldierID: 6, score: 88, isCompleted: true, status: "PASSED" };
let r62 = { objectId: 117, testName: "25 Meters", soldierID: 6, score: 67, isCompleted: true, status: "FAILED" };
let r63 = { objectId: 118, testName: "50 Meters", soldierID: 6, score: 73, isCompleted: true, status: "FAILED" };

let r71 = { objectId: 119, testName: "10 Meters", soldierID: 7, score: 99, isCompleted: true, status: "EXCELLENT" };
let r72 = { objectId: 120, testName: "25 Meters", soldierID: 7, score: 81, isCompleted: true, status: "PASSED" };
let r73 = { objectId: 121, testName: "50 Meters", soldierID: 7, score: 59, isCompleted: true, status: "FAILED" };

let r81 = { objectId: 122, testName: "10 Meters", soldierID: 8, score: 30, isCompleted: true, status: "FAILED" };
let r82 = { objectId: 123, testName: "25 Meters", soldierID: 8, score: 87, isCompleted: true, status: "PASSED" };
let r83 = { objectId: 124, testName: "50 Meters", soldierID: 8, score: 68, isCompleted: true, status: "FAILED" };

let r91 = { objectId: 125, testName: "10 Meters", soldierID: 9, score: 100, isCompleted: true, status: "EXCELLENT" };
let r92 = { objectId: 126, testName: "25 Meters", soldierID: 9, score: 100, isCompleted: true, status: "EXCELLENT" };
let r93 = { objectId: 127, testName: "50 Meters", soldierID: 9, score: 100, isCompleted: true, status: "EXCELLENT" };

let r101 = { objectId: 128, testName: "10 Meters", soldierID: 10, score: 94, isCompleted: true, status: "EXCELLENT" };
let r102 = { objectId: 129, testName: "25 Meters", soldierID: 10, score: 80, isCompleted: true, status: "PASSED" };
let r103 = { objectId: 130, testName: "50 Meters", soldierID: 10, score: 70, isCompleted: true, status: "FAILED" };

let r111 = { objectId: 131, testName: "10 Meters", soldierID: 11, score: 100, isCompleted: true, status: "EXCELLENT" };
let r112 = { objectId: 132, testName: "25 Meters", soldierID: 11, score: 55, isCompleted: true, status: "FAILED" };
let r113 = { objectId: 133, testName: "50 Meters", soldierID: 11, score: 60, isCompleted: true, status: "FAILED" };

let r121 = { objectId: 134, testName: "10 Meters", soldierID: 12, score: 100, isCompleted: true, status: "EXCELLENT" };
let r122 = { objectId: 135, testName: "25 Meters", soldierID: 12, score: 100, isCompleted: true, status: "EXCELLENT" };
let r123 = { objectId: 136, testName: "50 Meters", soldierID: 12, score: 100, isCompleted: true, status: "EXCELLENT" };

// ------------------------------------------------------------------------------------------------

let t1 = {
    name: "10 Meter Range",
    link: "10MeterRange",
    type: "HIGH",
    excellent: 90,
    pass: 60,
    results : [101, 104, 107, 110, 113, 116, 119, 122, 125, 128, 131, 134]
}

let t2 = {
    name: "25 Meter Range",
    link: "25MeterRange",
    type: "HIGH",
    excellent: 90,
    pass: 60,
    results: [102, 105, 108, 111, 114, 117, 120, 123, 126, 129, 132, 135]
}

let t3 = {
    name: "50 Meter Range",
    link: "50MeterRange",
    type: "HIGH",
    excellent: 90,
    pass: 60,
    results: [103, 106, 109, 112, 115, 118, 121, 124, 127, 130, 133, 136]
}

// ------------------------------------------------------------------------------------------------

let sect1 = { objectId : 1000, name: "Section 1", soldierIds: [1, 2], commander: "MC 1" }
let sect2 = { objectId : 1001, name: "Section 2", soldierIds: [3, 4], commander: "MC 2" }
let sect3 = { objectId : 1002, name: "Section 3", soldierIds: [5, 6], commander: "MC 3" }
let sect4 = { objectId : 1003, name: "Section 4", soldierIds: [7, 8], commander: "MC 4" }
let sect5 = { objectId : 1004, name: "Section 5", soldierIds: [9, 10], commander: "MC 5" }
let sect6 = { objectId : 1005, name: "Section 6", soldierIds: [11, 12], commander: "MC 6" }

let plat1 = { objectId : 1006, name: "Platoon 1", sectionIds: [1000, 1001], commander: "MM 1" }
let plat2 = { objectId : 1007, name: "Platoon 2", sectionIds: [1002, 1003], commander: "MM 2" }
let plat3 = { objectId : 1008, name: "Platoon 3", sectionIds: [1004, 1005], commander: "MM 3" }

let comp1 = { objectId : 1009, name: "Company 1", platoonIds: [1006, 1007, 1008], commander: "MC 1" }

// ------------------------------------------------------------------------------------------------
let soldiers = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12]
let tests = [t1, t2, t3]
let objects = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12,
    r11, r12, r13, r21, r22, r23, r31, r32, r33, r41, r42, r43, r51, r52, r53, r61, r62, r63,
    r71, r72, r73, r81, r82, r83, r91, r92, r93, r101, r102, r103, r111, r112, r113, r121, r122, r123,
    t1, t2, t3, sect1, sect2, sect3, sect4, sect5, sect6, plat1, plat2, plat3, comp1]

// ------------------------------------------------------------------------------------------------
// Fetch:

async function fetchTest(testLink) {
    let test = tests.find(test => test.link == testLink)
    return test
    // const res = await fetch("http://127.0.0.1:5022/api/Tests/ + testName", {
    //     method: "GET",
    // });
    
    // if (!res.ok) return null;

    // return JSON.parse(await res.text());
}

async function fetchTestName(testLink) {
    let test = tests.find(test => test.link == testLink)
    return test.name
}

async function fetchTestResults(test) {
    let results = []
    for (const resultID of test.results) {
        results.push(objects.find(obj => obj.objectId == resultID))
    }
    return results;
}

async function fetchSoldier(armyID) {
    // const res = await fetch("http://127.0.0.1:5022/api/Soldiers/" + armyID, {
    //     method: "GET",
    // });

    // if (!res.ok) return null;

    // return JSON.parse(await res.text());

    for (const s of soldiers) {
        if (s.armyID == armyID) {
            return s
        }
    }
}

async function fetchSoldiers(armyIDList) {
    let res = []
    for (const s of soldiers) {
        if (armyIDList.includes(s.armyID)) {
            res.push(s)
        }
    }
    return res
}

async function fetchSectionSoldiers(sectionID) {
    let section = objects.find(obj => obj.objectId == sectionID)
    let soldiers = await fetchSoldiers(section.soldierIds)
    return soldiers;
} 

async function fetchPlatoonSoldiers(platoonID) {
    let platoon = objects.find(obj => obj.objectId == platoonID)
    let res = []
    for (const sectionID of platoon.sectionIds) {
        let newSoldiers = await fetchSectionSoldiers(sectionID)
        res = res.concat(newSoldiers)
    }
    return res
}

async function fetchCompanySoldiers(companyID) {
    let company = objects.find(obj => obj.objectId == companyID)
    let res = []
    for (const platoonID of company.platoonIds) {
        res = res.concat(await fetchPlatoonSoldiers(platoonID))
    }
    return res
}

async function fetchResultByTestAndSoldier(testLink, soldierID) {
    // const res = await fetch("http://127.0.0.1:5022/api/Results/" + testName + "-" + soldierID, {
    //     method: "GET",
    // });
    //
    // if (!res.ok) return null;
    //
    // return JSON.parse(await res.text());
    let test = tests.find(test => test.link == testLink)
    let results = test.results
    for (const resultID of results) {
        let result = objects.find(obj => obj.objectId == resultID)
        if (result.soldierID == soldierID) {
            return result
        }
    }
}

async function fetchSoldierResults(soldierId) {
    let res = []
    for (const test of tests) {
        let result = fetchResultByTestAndSoldier(test.link, soldierId)
        res.push(result)
    }
    return res
}

async function fetchSection(sectionID) {
    return objects.find(obj => obj.objectId == sectionID)
}

async function fetchPlatoon(platoonID) {
    return objects.find(obj => obj.objectId == platoonID)
}

async function fetchCompany(companyID) {
    return objects.find(obj => obj.objectId == companyID)
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
    fetchCompany, fetchPlatoon, fetchSection, fetchTestName,
    postSoldier, postUser, postResult, postSection, postPlatoon, postCompany,
    postSoldierToSection, postVerifyUser
} 