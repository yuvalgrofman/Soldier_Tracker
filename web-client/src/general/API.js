import img from '../general/omer1.jpg'


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

let r11 = { objectId: 101, testName: "Test 1", SoldierID: 1, score: 100, isCompleted: true }
let r21 = { objectId: 102, testName: "Test 2", SoldierID: 1, score: 95, isCompleted: true }
let r12 = { objectId: 103, testName: "Test 1", SoldierID: 2, score: 70, isCompleted: true }
let r13 = { objectId: 104, testName: "Test 1", SoldierID: 3, score: 50, isCompleted: false }


let test1 = {
    name: "Test 1",
    type: "HIGH",
    findBySoldierId: (id) => test.soldiers.find((s) => (s.id == id)),
    excellent: 80,
    pass: 60,
    results: [ 101, 103, 104 ] // Real objectIds aren't numbers, it's for testing...
}



async function fetchTest(testName) {
    return test;
    // const res = await fetch("http://127.0.0.1:5022/api/Tests/ + testName", {
    //     method: "GET",
    // });
    
    // if (!res.ok) return null;

    // return JSON.parse(await res.text());
    return test1
}

async function postSoldierToSection(sectionID, soldierID) {
    // const res = await fetch("http://127.0.0.1:5022/api/Force/addSoldier/", {
    //     method: "POST",
    //     body: JSON.stringify({ soldierID, sectionID }),
    // });
    
    // if (!res.ok) return null;
}

async function fetchSoldier(armyID) {
    // const res = await fetch("http://127.0.0.1:5022/api/Soldiers/" + armyID, {
    //     method: "GET",
    // });

    // if (!res.ok) return null;

    // return JSON.parse(await res.text());

    let ss = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12]
    for (const s of ss) { if (s.armyID == armyID) {return s} }
}

async function fetchResultByTestAndSoldier(testName, soldierID) {
    const res = await fetch("http://127.0.0.1:5022/api/Results/" + testName + "-" + soldierID, {
        method: "GET",
    });
    
    if (!res.ok) return null;

    return JSON.parse(await res.text());
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
    const response = await fetch("http://127.0.0.1:5022/api/Result/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({testName, soldierId, score}),
    });

    return response;
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

export { fetchTest, fetchSoldier, fetchResultByTestAndSoldier, postSoldier, postUser, postResult,
    // For testing:
    s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, test1, r11, r21 , r13, r12}