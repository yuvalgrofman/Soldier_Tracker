const Soldier = require('../models/soldier');

const createSoldier = async (name, img, section, platoon, company, medicalProfile,
     citizinshipID, armyID, address) => { 
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
        citizinshipID,
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


module.exports = { getSoldier, createSoldier };