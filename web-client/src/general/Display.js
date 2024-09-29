// TESTS ------------------------------------------------------------------------------------------------

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

// CONTENTS ------------------------------------------------------------------------------------------------

let contentDisplay1 = { name: "Shooting 1", link: "ShootingOne", tests: [testDisplay1, testDisplay2, testDisplay3] }
let contentDisplay2 = { name: "Shooting 2", link: "ShootingTwo", tests: [testDisplay4, testDisplay5, testDisplay6] }
let contentDisplay3 = { name: "Physical Exams", link: "Physical", tests: [testDisplay7, testDisplay8, testDisplay9] }
let contentDisplay4 = { name: "Urban Warfare", link: "Urban", tests: [testDisplay10, testDisplay11, testDisplay12] }
let contentDisplay5 = { name: "Open Warfare", link: "Open", tests: [testDisplay13, testDisplay14, testDisplay15] }

const contents = [contentDisplay1, contentDisplay2, contentDisplay3, contentDisplay4, contentDisplay5]

// SETTING OPTIONS ----------------------------------------------------------------------------------------

let settingsDisplay1 = { name: "Add Soldier", link: "AddSoldier" }
let settingsDisplay2 = { name: "Add User", link: "AddUser" }

let settingDisplay = { name: "Settings", link: "Settings", tests: [ settingsDisplay1, settingsDisplay2 ] }

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