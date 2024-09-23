import img from '../images/omer1.jpeg'

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

let r1 = { testName: "Test 1", SoldierID: 1, score: "100", isCompleted: true } 

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

async function fetchTest(testName) {
    return test;
    // const res = await fetch("http://127.0.0.1:5022/api/Tests/", {
    //     method: "GET",
    //     body: JSON.stringify({ testName }),
    // });
    
    // if (!res.ok) return null;

    // return JSON.parse(await res.text());
}

async function postSoldierToSection(sectionID, soldierID) {
    // const res = await fetch("http://127.0.0.1:5022/api/Force/addSoldier/", {
    //     method: "GET",
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
}

async function fetchResultByTestAndSoldier(testName, soldierID) {
    const res = await fetch("http://127.0.0.1:5022/api/Results/", {
        method: "GET",
        body: JSON.stringify({ testName, soldierID }),
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

async function postResult(testId, soldierId, score) {
    const response = await fetch("http://127.0.0.1:5022/api/Result/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({testId, soldierId, score}),
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

export { fetchTest, fetchSoldier, fetchResultByTestAndSoldier, postSoldier, postUser, postResult} 