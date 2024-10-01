const Soldier = require('../models/soldier');

const createSoldier = async (name, img, section, platoon, company, medicalProfile,
                             citizenshipID, armyID, address, religion) => {
    const soldier = await Soldier.findOne({ armyID });
    if (soldier !== null) {
        throw new Error('Soldier already exists');
    }

    await Soldier.create({
        name,
        img,
        section,
        platoon,
        company,
        address,
        religion,
        citizenshipID,
        medicalProfile,
        armyID,
    });

}

const getSoldier = async (armyID) => {
    const soldier = await Soldier.findOne({ armyID });
    
    if (soldier.length === 0) {
        throw new Error('Soldier not found');
    }

    return soldier;
}

const updateSoldierException = async (armyID, mode) => {
    const soldier = getSoldier(armyID)

    if (mode == "ADD") {
        soldier.exception = (soldier.exception + 1)
    } else if (mode == "SUB") {
        soldier.exception = (soldier.exception - 1)
    }

    soldier.save()
}

module.exports = { getSoldier, updateSoldierException, createSoldier };