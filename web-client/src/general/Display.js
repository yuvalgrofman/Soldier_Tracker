// TESTS ------------------------------------------------------------------------------------------------

let testDisplay1 = { name: "ירי ראשוני (10 מטר)", link: "10MeterRange" }
let testDisplay2 = { name: "איפוסים", link: "25MeterRange" }
let testDisplay3 = { name: "ווידוא איפוס", link: "50MeterRange" }
let testDisplay4 = { name: "ירי ביישור קו", link: "ShootingWalking" }

let testDisplay5 = { name: "יל״מ ריצה 200 מטר", link: "RunShoot" }
let testDisplay6 = { name: "בוחן מאה", link: "100MeterRange" }
let testDisplay7 = { name: "בוחן רמה", link: "PositionsRange" }

let testDisplay8 = { name: "בוחן מסלול", link: "ObstacleCourse" }
let testDisplay9 = { name: "ריצת בר אור", link: "3KMRun" }
let testDisplay10 = { name: "ספרינט בר אור", link: "Sprints" }
let testDisplay11 = { name: "מתח מבחן כש״ג", link: "PullUp" }
let testDisplay12 = { name: "מקבילים מבחן כש״ג", link: "Dips" }

let testDisplay13 = { name: "תרגול יבש פרט", link: "DryPracticeSingle" }
let testDisplay14 = { name: "תרגיל רטוב פרט", link: "WetPracticeSingle" }
let testDisplay15 = { name: "תרגול יבש חולייה", link: "DryPracticeSquad" }
let testDisplay16 = { name: "תרגיל רטוב חולייה", link: "WetPracticeSquad" }

// CONTENTS ------------------------------------------------------------------------------------------------

let contentDisplay1 = { name: "שבוע קליעה 1", link: "ShootingOne", tests: [testDisplay1, testDisplay2, testDisplay3, testDisplay4] }
let contentDisplay2 = { name: "שבוע קליעה 2", link: "ShootingTwo", tests: [testDisplay5, testDisplay6, testDisplay7] }
let contentDisplay3 = { name: "שבוע קליעה 3", link: "ShootingTwo", tests: [testDisplay5, testDisplay6, testDisplay7] }
let contentDisplay4 = { name: "שבוע קליעה 4", link: "ShootingTwo", tests: [testDisplay5, testDisplay6, testDisplay7] }
let contentDisplay5 = { name: "שבוע קליעה 5", link: "ShootingTwo", tests: [testDisplay5, testDisplay6, testDisplay7] }


let contentDisplay6 = { name: "בחנים פיזיים", link: "Physical", tests: [testDisplay8, testDisplay9, testDisplay10, testDisplay11, testDisplay12] }
let contentDisplay7 = { name: "ש״פ פרט חולייה", link: "OpenCombat", tests: [testDisplay13, testDisplay14, testDisplay15, testDisplay16] }

const contents = [contentDisplay1, contentDisplay2, contentDisplay3, contentDisplay4,
                  contentDisplay5, contentDisplay6, contentDisplay7]

// SETTING OPTIONS ----------------------------------------------------------------------------------------

let addSoldierDisplay = { name: "הוספת חייל", link: "AddSoldier" }
let addUserDisplay = { name: "הוספת משתמש", link: "AddUser" }
let addCompanyDisplay = {name : "הוספת פלוגה", link: "AddCompany"} 

let settingDisplay = { name: "הגדרות", link: "Settings", tests: [ addSoldierDisplay, addUserDisplay, addCompanyDisplay ] }

// DISPLAY FUNCTIONS --------------------------------------------------------------------------------------

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

function fetchAllTestDisplays() {
    let allTests = [];
    for (let content of contents) {
        allTests.push(...content.tests);
    }
    return allTests;
}

export { fetchSettingDisplays, fetchContentDisplays, fetchContentDisplay, fetchTestDisplay, fetchAllTestDisplays }; 