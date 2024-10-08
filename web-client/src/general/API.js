import profilePic1 from "../images/s1.jpeg"
import profilePic2 from "../images/s2.jpeg"
import profilePic3 from "../images/s3.jpeg"
import profilePic4 from "../images/s4.jpeg"

import { fetchAllTestDisplays } from "./Display"

//  ------------------------------------------------------------------------------------------------

let s1 = {
    name: "יובל", citizenshipID: 111111111, armyID: 1111111, profilePic: profilePic1, section: "א׳", platoon: "1",
    company: "י׳", address: "בן גוריון 28", medicalProfile: 97, rightHanded: true, packal: "נגב",
    religion: "יהודי", sensitivities: "אין", exception: 1
}

let s2 = {
    name: "עומרי", citizenshipID: 222222222, armyID: 2222222, profilePic: profilePic2, section: "א׳", platoon: "1",
    company: "י׳", address: "בן גוריון 28", medicalProfile: 97, rightHanded: true, packal: "קלע",
    religion: "יהודי", sensitivities: "אין", exception: 1
}

let s3 = {
    name: "יעקב", citizenshipID: 333333333, armyID: 3333333, profilePic: profilePic3, section: "ב׳", platoon: "1",
    company: "י׳", address: "בן גוריון 28", medicalProfile: 97, rightHanded: true, packal: "מאג",
    religion: "יהודי", sensitivities: "אין", exception: 2
}

let s4 = {
    name: "אושר", citizenshipID: 444444444, armyID: 4444444, profilePic: profilePic4, section: "ב׳", platoon: "1",
    company: "י׳", address: "בן גוריון 28", medicalProfile: 97, rightHanded: true, packal: "חובש",
    religion: "יהודי", sensitivities: "אין", exception: 1
}

let s5 = {
    name: "אושרי", citizenshipID: 555555555, armyID: 5555555, profilePic: profilePic1, section: "א׳", platoon: "2",
    company: "י׳", address: "בן גוריון 28", medicalProfile: 97, rightHanded: true, packal: "מפקד חולייה",
    religion: "יהודי", sensitivities: "אין", exception: 1
}

let s6 = {
    name: "תמיר", citizenshipID: 666666666, armyID: 6666666, profilePic: profilePic2, section: "א׳", platoon: "2",
    company: "י׳", address: "בן גוריון 28", medicalProfile: 97, rightHanded: true, packal: "מפקד חולייה",
    religion: "יהודי", sensitivities: "אין", exception: 1
}

let s7 = {
    name: "עילאי", citizenshipID: 777777777, armyID: 7777777, profilePic: profilePic3, section: "ב׳", platoon: "2",
    company: "י׳", address: "בן גוריון 28", medicalProfile: 97, rightHanded: true, packal: "מטול",
    religion: "יהודי", sensitivities: "אין", exception: 1
}

let s8 = {
    name: "יאיר", citizenshipID: 888888888, armyID: 8888888, profilePic: profilePic4, section: "ב׳", platoon: "2",
    company: "י׳", address: "בן גוריון 28", medicalProfile: 97, rightHanded: true, packal: "צלף",
    religion: "יהודי", sensitivities: "אין", exception: 1
}

let s9 = {
    name: "איתי", citizenshipID: 999999999, armyID: 9999999, profilePic: profilePic1, section: "א׳", platoon: "3",
    company: "י׳", address: "בן גוריון 28", medicalProfile: 97, rightHanded: true, packal: "נגב",
    religion: "יהודי", sensitivities: "אין", exception: 0
}

let s10 = {
    name: "ליאב", citizenshipID: 101010101, armyID: 1010101, profilePic: profilePic2, section: "א׳", platoon: "3",
    company: "י׳", address: "בן גוריון 28", medicalProfile: 97, rightHanded: true, packal: "מטאדור",
    religion: "יהודי", sensitivities: "אין", exception: 1
}

let s11 = {
    name: "נחשון", citizenshipID: 110110110, armyID: 1101101, profilePic: profilePic3, section: "ב׳", platoon: "3",
    company: "י׳", address: "בן גוריון 28", medicalProfile: 97, rightHanded: true, packal: "טיל לאו",
    religion: "יהודי", sensitivities: "אין", exception: 1
}

let s12 = {
    name: "יונתן", citizenshipID: 121212121, armyID: 1212121, profilePic: profilePic4, section: "ב׳", platoon: "3",
    company: "י׳", address: "בן גוריון 28", medicalProfile: 97, rightHanded: true, packal: "מאג",
    religion: "יהודי", sensitivities: "אין", exception: 0
}

// ------------------------------------------------------------------------------------------------

let r11 = { objectId: 101, testName: "10 Meters", soldierID: 1111111, score: 100, isCompleted: true, status: "EXCELLENT" };
let r12 = { objectId: 102, testName: "25 Meters", soldierID: 1111111, score: 80, isCompleted: true, status: "PASSED" };
let r13 = { objectId: 103, testName: "50 Meters", soldierID: 1111111, score: 70, isCompleted: true, status: "FAILED" };
let r21 = { objectId: 104, testName: "10 Meters", soldierID: 2222222, score: 90, isCompleted: true, status: "EXCELLENT" };
let r22 = { objectId: 105, testName: "25 Meters", soldierID: 2222222, score: 70, isCompleted: true, status: "FAILED" };
let r23 = { objectId: 106, testName: "50 Meters", soldierID: 2222222, score: 60, isCompleted: true, status: "FAILED" };
let r31 = { objectId: 107, testName: "10 Meters", soldierID: 3333333, score: 80, isCompleted: true, status: "PASSED" };
let r32 = { objectId: 108, testName: "25 Meters", soldierID: 3333333, score: 60, isCompleted: true, status: "FAILED" };
let r33 = { objectId: 109, testName: "50 Meters", soldierID: 3333333, score: 50, isCompleted: true, status: "FAILED" };
let r41 = { objectId: 110, testName: "10 Meters", soldierID: 4444444, score: 97, isCompleted: true, status: "EXCELLENT" };
let r42 = { objectId: 111, testName: "25 Meters", soldierID: 4444444, score: 94, isCompleted: true, status: "EXCELLENT" };
let r43 = { objectId: 112, testName: "50 Meters", soldierID: 4444444, score: 32, isCompleted: true, status: "FAILED" };
let r51 = { objectId: 113, testName: "10 Meters", soldierID: 5555555, score: 91, isCompleted: true, status: "EXCELLENT" };
let r52 = { objectId: 114, testName: "25 Meters", soldierID: 5555555, score: 78, isCompleted: true, status: "FAILED" };
let r53 = { objectId: 115, testName: "50 Meters", soldierID: 5555555, score: 82, isCompleted: true, status: "FAILED" };
let r61 = { objectId: 116, testName: "10 Meters", soldierID: 6666666, score: 88, isCompleted: true, status: "PASSED" };
let r62 = { objectId: 117, testName: "25 Meters", soldierID: 6666666, score: 67, isCompleted: true, status: "FAILED" };
let r63 = { objectId: 118, testName: "50 Meters", soldierID: 6666666, score: 73, isCompleted: true, status: "FAILED" };
let r71 = { objectId: 119, testName: "10 Meters", soldierID: 7777777, score: 99, isCompleted: true, status: "EXCELLENT" };
let r72 = { objectId: 120, testName: "25 Meters", soldierID: 7777777, score: 81, isCompleted: true, status: "PASSED" };
let r73 = { objectId: 121, testName: "50 Meters", soldierID: 7777777, score: 59, isCompleted: true, status: "FAILED" };
let r81 = { objectId: 122, testName: "10 Meters", soldierID: 8888888, score: 30, isCompleted: true, status: "FAILED" };
let r82 = { objectId: 123, testName: "25 Meters", soldierID: 8888888, score: 87, isCompleted: true, status: "PASSED" };
let r83 = { objectId: 124, testName: "50 Meters", soldierID: 8888888, score: 68, isCompleted: true, status: "FAILED" };
let r91 = { objectId: 125, testName: "10 Meters", soldierID: 9999999, score: 100, isCompleted: true, status: "EXCELLENT" };
let r92 = { objectId: 126, testName: "25 Meters", soldierID: 9999999, score: 100, isCompleted: true, status: "EXCELLENT" };
let r93 = { objectId: 127, testName: "50 Meters", soldierID: 9999999, score: 100, isCompleted: true, status: "EXCELLENT" };
let r101 ={ objectId: 128, testName: "10 Meters", soldierID: 1010101, score: 94, isCompleted: true, status: "EXCELLENT" };
let r102 ={ objectId: 129, testName: "25 Meters", soldierID: 1010101, score: 80, isCompleted: true, status: "PASSED" };
let r103 ={ objectId: 130, testName: "50 Meters", soldierID: 1010101, score: 70, isCompleted: true, status: "FAILED" };
let r111 ={ objectId: 131, testName: "10 Meters", soldierID: 1101101, score: 100, isCompleted: true, status: "EXCELLENT" };
let r112 ={ objectId: 132, testName: "25 Meters", soldierID: 1101101, score: 55, isCompleted: true, status: "FAILED" };
let r113 ={ objectId: 133, testName: "50 Meters", soldierID: 1101101, score: 60, isCompleted: true, status: "FAILED" };
let r121 ={ objectId: 134, testName: "10 Meters", soldierID: 1212121, score: 100, isCompleted: true, status: "EXCELLENT" };
let r122 ={ objectId: 135, testName: "25 Meters", soldierID: 1212121, score: 100, isCompleted: true, status: "EXCELLENT" };
let r123 ={ objectId: 136, testName: "50 Meters", soldierID: 1212121, score: 100, isCompleted: true, status: "EXCELLENT" };

// ------------------------------------------------------------------------------------------------


let t1 = {
    name: "ירי ראשוני (10 מטר)",
    link: "10MeterRange",
    type: "HIGH",
    excellent: 90,
    pass: 60,
    results: [101, 104, 107, 110, 113, 116, 119, 122, 125, 128, 131, 134]
}
let t2 = {
    name: "איפוסים",
    link: "25MeterRange",
    type: "HIGH",
    excellent: 90,
    pass: 60,
    results: [102, 105, 108, 111, 114, 117, 120, 123, 126, 129, 132, 135]
}
let t3 = {
    name: "ווידוא איפוס",
    link: "50MeterRange", 
    type: "HIGH",
    excellent: 90,
    pass: 60,
    results: [103, 106, 109, 112, 115, 118, 121, 124, 127, 130, 133, 136]
}
let t4 = {
    name: "ירי ביישור קו",
    link: "ShootingWalking",
    type: "HIGH",
    excellent: 90,
    pass: 60,
    results: [103, 106, 109, 112, 115, 118, 121, 124, 127, 130, 133, 136]
}

let t5 = {
    name: "יל״מ ריצה 200 מטר",
    link: "RunShoot",
    type: "HIGH",
    excellent: 90,
    pass: 60,
    results: [102, 105, 108, 111, 114, 117, 120, 123, 126, 129, 132, 135]
}
let t6 = {
    name: "בוחן מאה",
    link: "100MeterRange",
    type: "HIGH",
    excellent: 90,
    pass: 60,
    results: [103, 106, 109, 112, 115, 118, 121, 124, 127, 130, 133, 136]
}
let t7 = {
    name: "בוחן רמה",
    link: "PositionsRange",
    type: "HIGH",
    excellent: 90,
    pass: 60,
    results : [101, 104, 107, 110, 113, 116, 119, 122, 125, 128, 131, 134]
}

let t8 = {
    name: "בוחן מסלול",
    link: "ObstacleCourse",
    type: "HIGH",
    excellent: 90,
    pass: 60,
    results: [102, 105, 108, 111, 114, 117, 120, 123, 126, 129, 132, 135]
}
let t9 = {
    name: "ריצת בר אור",
    link: "3KMRun",
    type: "HIGH",
    excellent: 90,
    pass: 60,
    results : [101, 104, 107, 110, 113, 116, 119, 122, 125, 128, 131, 134]
}
let t10 = {
    name: "ספרינט בר אור",
    link: "Sprints",
    type: "HIGH",
    excellent: 90,
    pass: 60,
    results: [103, 106, 109, 112, 115, 118, 121, 124, 127, 130, 133, 136]
}
let t11 = {
    name: "מתח מבחן כש״ג",
    link: "PullUp",
    type: "HIGH",
    excellent: 90,
    pass: 60,
    results : [101, 104, 107, 110, 113, 116, 119, 122, 125, 128, 131, 134]
}
let t12 = {
    name: "מקבילים מבחן כש״ג",
    link: "Dips",
    type: "HIGH",
    excellent: 90,
    pass: 60,
    results: [103, 106, 109, 112, 115, 118, 121, 124, 127, 130, 133, 136]
}

let t13 = {
    name: "תרגול יבש פרט",
    link: "DryPracticeSingle",
    type: "HIGH",
    excellent: 90,
    pass: 60,
    results: [102, 105, 108, 111, 114, 117, 120, 123, 126, 129, 132, 135]
}
let t14 = {
    name: "תרגיל רטוב פרט",
    link: "WetPracticeSingle",
    type: "HIGH",
    excellent: 90,
    pass: 60,
    results: [103, 106, 109, 112, 115, 118, 121, 124, 127, 130, 133, 136]
}
let t15 = {
    name: "תרגול יבש חולייה",
    link: "DryPracticeSquad",
    type: "HIGH",
    excellent: 90,
    pass: 60,
    results : [101, 104, 107, 110, 113, 116, 119, 122, 125, 128, 131, 134]
}
let t16 = {
    name: "תרגיל רטוב חולייה",
    link: "WetPracticeSquad",
    type: "HIGH",
    excellent: 90,
    pass: 60,
    results: [102, 105, 108, 111, 114, 117, 120, 123, 126, 129, 132, 135]
}

// ------------------------------------------------------------------------------------------------

let sect1 = { objectId : 1000, name: "כיתה א", soldierIds: [1111111, 2222222], commander: "MC 1" }
let sect2 = { objectId : 1001, name: "כיתה ב", soldierIds: [3333333, 4444444], commander: "MC 2" }
let sect3 = { objectId : 1002, name: "כיתה א", soldierIds: [5555555, 6666666], commander: "MC 3" }
let sect4 = { objectId : 1003, name: "כיתה ב", soldierIds: [7777777, 8888888], commander: "MC 4" }
let sect5 = { objectId : 1004, name: "כיתה א", soldierIds: [9999999, 1010101], commander: "MC 5" }
let sect6 = { objectId : 1005, name: "כיתה ב", soldierIds: [1101101, 1212121], commander: "MC 6" }

let plat1 = { objectId : 1006, name: "מחלקה 1", sectionIds: [1000, 1001], commander: "MM 1" }
let plat2 = { objectId : 1007, name: "מחלקה 2", sectionIds: [1002, 1003], commander: "MM 2" }
let plat3 = { objectId : 1008, name: "מחלקה 3", sectionIds: [1004, 1005], commander: "MM 3" }

let comp1 = { objectId : 1009, name: "פלוגה י׳ ", platoonIds: [1006, 1007, 1008], commander: "MC 1" }

// ------------------------------------------------------------------------------------------------
let soldiers = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12]
let tests = [t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16]
let objects = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12,
    r11, r12, r13, r21, r22, r23, r31, r32, r33, r41, r42, r43, r51, r52, r53, r61, r62, r63,
    r71, r72, r73, r81, r82, r83, r91, r92, r93, r101, r102, r103, r111, r112, r113, r121, r122, r123,
    t1, t2, t3, sect1, sect2, sect3, sect4, sect5, sect6, plat1, plat2, plat3, comp1]

// ------------------------------------------------------------------------------------------------

let gantt1 = {
    subject: "Running",
    sunday: "2km run",
    wednesday: "500m x 4 run",
    thursday: "1.5km run",
    saturday: "3km run",
}

let gantt2 = {
    subject: "Safety",
    sunday: "Safety hour",
}

let gantt3 = {
    subject: "Digital Campus",
    monday: "3 videos about shooting basics",
    tuesday: "grenade test",
    friday: "two tests about shooting basics",
    saturday: "video about first-aid",
}

// ------------------------------------------------------------------------------------------------

// Fetch:

async function fetchTest(testLink) {
    let test = tests.find(test => test.link == testLink)
    return test

    // const res = await fetch("http://127.0.0.1:5022/api/Tests/ + testLink", {
    //     method: "GET",
    // });

    // if (!res.ok) return null;

    // return JSON.parse(await res.text());
}

async function fetchResultByObjectId(resultObjId) {
    // No need for implementation in local version!!

    // const res = await fetch("http://127.0.0.1:5022/api/Results/" + resultObjId, {
    //     method: "GET",
    // });
    //
    // if (!res.ok) return null;
    //
    // return JSON.parse(await res.text());
}

async function fetchTestName(testLink) {
    // return (await fetchTest(testLink)).name

    let test = tests.find(test => test.link == testLink)
    return test.name
}

async function fetchTestResults(test) {
    // const resultObjIds =  (await fetchTest(testLink)).results
    // return resultObjIds.map(async (objId) => await fetchResultByObjectId(objId))

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

async function fetchTestFailedBySoldier(armyID) {
    let ts = fetchAllTestDisplays();
    let tests = [];
    for (const t in ts) {
        tests.push(fetchTest(t.link));
    }
    
    for (const test of tests) {
        let result = await fetchResultByTestAndSoldier(test.link, armyID)
        if (result.status == "FAILED") {
            return test.name;
        }
    }

    return null;
}

async function fetchTestsFailedByUsers(armyIDs) {
    // let ts = fetchAllTestDisplays();
    // let tests = [];
    // for (const t in ts) {
    //     tests.push(await fetchTest(t.link));
    // }

    let soldierTestsFails = {};
    for (let armyID of armyIDs) {
        for (let test of tests) {
            let result = await fetchResultByTestAndSoldier(test.link, armyID)
            if (result.status == "FAILED") {
                if (armyID in soldierTestsFails) {
                    soldierTestsFails[armyID].push(test.name)
                } else {
                    soldierTestsFails[armyID] = [test.name]
                }
            }
        }
    }
    return soldierTestsFails;
}

async function fetchSoldiers(armyIDList) {
    // return (armyIDList).map(async (soldierId) => await fetchSoldier(soldierId))

    let ss = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12]
    let res = []
    for (const s of soldiers) {
        if (armyIDList.includes(s.armyID)) {
            res.push(s)
        }
    }
    return res
}

async function fetchSectionSoldiers(sectionID) {
    // const section = await fetchSection(sectionID)
    // return (section.soldierIds).map(async (soldierId) => await fetchSoldier(soldierId))

    let section = objects.find(obj => obj.objectId == sectionID)
    let soldiers = await fetchSoldiers(section.soldierIds)
    return soldiers;
} 

async function fetchPlatoonSoldiers(platoonID) {
    // const platoon = await fetchPlatoon(platoonID)
    // const sectionSoldiers = (platoon.sectionIds).map(async (secId) => await fetchSectionSoldiers(secId))
    // return sectionSoldiers.flat(1)

    let platoon = objects.find(obj => obj.objectId == platoonID)
    let res = []
    for (const sectionID of platoon.sectionIds) {
        let newSoldiers = await fetchSectionSoldiers(sectionID)
        res = res.concat(newSoldiers)
    }
    return res
}

async function fetchCompanySoldiers(companyID) {
    // const company = await fetchCompany(companyID)
    // const platoonSoldiers = (company.platoonIds).map(async (platId) => await fetchPlatoonSoldiers(platId))
    // return platoonSoldiers.flat(1)

    let company = objects.find(obj => obj.objectId == companyID)
    let res = []
    for (const platoonID of company.platoonIds) {
        res = res.concat(await fetchPlatoonSoldiers(platoonID))
    }
    return res
}

async function fetchResultByTestAndSoldier(testLink, soldierID) {
    // const res = await fetch("http://127.0.0.1:5022/api/Results/" + testLink + "-" + soldierID, {
    //     method: "GET",
    // });
    //
    // if (!res.ok) return null;
    //
    // return JSON.parse(await res.text());
    let test = tests.find(test => test.link == testLink)
    let results = test.results
    for (let resultID of results) {
        let result = objects.find(obj => obj.objectId == resultID)
        if (result.soldierID == soldierID) {
            return result
        }
    }
}

async function fetchSoldierResults(soldierId) {
    let res = []
    for (const test of tests) {
        let result = await fetchResultByTestAndSoldier(test.link, soldierId)
        var newResult = JSON.parse(JSON.stringify(result))
        newResult.testName = test.name
        res.push(newResult)
    }
    return res
}

async function fetchSection(sectionID) {
    // const res = await fetch("http://127.0.0.1:5022/api/Force/section/" + sectionID, {
    //     method: "GET",
    // });
    //
    // if (!res.ok) return null;
    //
    // return JSON.parse(await res.text());

    return objects.find(obj => obj.objectId == sectionID)
}

async function fetchPlatoon(platoonID) {
    // const res = await fetch("http://127.0.0.1:5022/api/Force/platoon/" + platoonID, {
    //     method: "GET",
    // });
    //
    // if (!res.ok) return null;
    //
    // return JSON.parse(await res.text());

    return objects.find(obj => obj.objectId == platoonID)
}

async function fetchCompany(companyID) {
    // const res = await fetch("http://127.0.0.1:5022/api/Force/company/" + companyID, {
    //     method: "GET",
    // });
    //
    // if (!res.ok) return null;
    //
    // return JSON.parse(await res.text());

    return objects.find(obj => obj.objectId == companyID)
}

async function fetchPlatoonSections(platoonID) {
    let platoon = objects.find(obj => obj.objectId == platoonID)
    let res = []
    for (const sectionID of platoon.sectionIds) {
        res.push(objects.find(obj => obj.objectId == sectionID))
    }
    return res
}

async function fetchCompanyPlatoons(companyID) {
    // const company = await fetchCompany(companyID)
    // return platoons = (company.platoonIds).map(async (platId) => await fetchPlatoon(platId))

    let company = objects.find(obj => obj.objectId == companyID)
    let res = []
    for (const platoonID of company.platoonIds) {
        res.push(objects.find(obj => obj.objectId == platoonID))
    }
    return res
}

async function fetchGantt(link, company, week) {
    const res = await fetch("http://127.0.0.1:5022/api/Gantt/" +
        company.toString() + "-" + week.toString() + "-" + link.toString(), {
        method: "GET",
    });

    if (!res.ok) {
        return null
    };

    return JSON.parse(await res.text());
}

async function fetchBoard(company, week) {
    // const res = await fetch("http://127.0.0.1:5022/api/Gantt/board/" +
    //     company.toString() + "-" + week.toString(), {
    //     method: "GET",
    // });
    //
    // if (!res.ok) {
    //     return null
    // };
    //
    // return await res.text(); // An array of JSONs

    return [gantt1, gantt2, gantt3]
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

async function postUpdateResult(testLink, soldierID, score, status) {
    // const response = await fetch("http://127.0.0.1:5022/api/Results/update", {
    //     method: "POST",
    //     headers: {
    //         "Schedule-Type": "application/json",
    //     },
    //     body: JSON.stringify({testLink, soldierID, score, status}),
    // });
    //
    // return response;
}

async function postCreateResult(testLink, soldierID) {
    // const response = await fetch("http://127.0.0.1:5022/api/Results/create", {
    //     method: "POST",
    //     headers: {
    //         "Schedule-Type": "application/json",
    //     },
    //     body: JSON.stringify({ testLink, soldierID }),
    // });
    //
    // return response;
}

// Receives JSON of the following format and creates the company with it's platoons and sections
// {
//     name: "",
//     commander: "",
//     platoon1Commander: "",
//     platoon2Commander: "",
//     platoon3Commander: "",
//     section11Commander: "",
//     section12Commander: "",
//     section13Commander: "",
//     section21Commander: "",
//     section22Commander: "",
//     section23Commander: "",
//     section31Commander: "",
//     section32Commander: "",
//     section33Commander: "",
// }
async function postCompanyPlatoonsAndSection(company) {
    // TODO: implement function
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

    // const response = await fetch("http://127.0.0.1:5022/api/Force/soldiers", {
    //     method: "POST",
    //     headers: {
    //         "Schedule-Type": "application/json",
    //     },
    //     body: JSON.stringify(soldier),
    // });

    // return response;
}

async function updatePlatoons(name, platoonIds) {
    fetch("http://127.0.0.1:5022/api/Force/updatePlatoons", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name, platoonIds}),
    });
}

async function postUser(user) {
    if (user.name == "Yuval")
        return { status: 409 }
    return {}

    // const response = await fetch("http://127.0.0.1:5022/api/Users", {
    //     method: "POST",
    //     headers: {
    //         "Schedule-Type": "application/json",
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

async function updateSoldiersException(soldierId, mode) {
    const response = await fetch("http://127.0.0.1:5022/api/Soldiers/exception", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({soldierId, mode}),
    });

    return response
}

async function postGantt(link, subject, company, week) {
    const response = await fetch("http://127.0.0.1:5022/api/Gantt/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({link, subject, company, week}),
    });

    return response;
}

// newData should be a JSON with fields named with days (for example: sunday), and the value of that field is the text.
// Not all days must be defined in newData (for example to create an empty cell)
async function updateGantt(link, company, week, newData) {
    const response = await fetch("http://127.0.0.1:5022/api/Gantt/update", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({link, company, week, newData}),
    });

    return response;
}

export { 
    fetchTest,
    fetchResultByObjectId,
    fetchTestName,
    fetchTestResults,
    fetchSoldier,
    fetchTestFailedBySoldier,
    fetchTestsFailedByUsers,
    fetchSoldiers,
    fetchSectionSoldiers,
    fetchPlatoonSoldiers,
    fetchCompanySoldiers,
    fetchResultByTestAndSoldier,
    fetchSoldierResults,
    fetchSection,
    fetchPlatoon,
    fetchCompany,
    fetchPlatoonSections,
    fetchCompanyPlatoons,
    fetchGantt,
    fetchBoard,
    postSoldierToSection,
    postPlatoon,
    postUpdateResult,
    postCreateResult,
    postCompanyPlatoonsAndSection,
    postCompany,
    postSection,
    postSoldier,
    updatePlatoons,
    postUser,
    postVerifyUser,
    updateSoldiersException,
    postGantt,
    updateGantt
};
