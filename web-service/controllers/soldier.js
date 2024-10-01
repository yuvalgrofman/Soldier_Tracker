const soldierService = require('../services/soldier');

// armyId = personal ID number
// ID = israeli ID
// soldierId = object ID

const getSoldier = async (req, res) => {
    const  armyID   = req.params.armyID;

    try {
        const soldier = await soldierService.getSoldier(armyID);
        return res.send(soldier);
    } catch (error) {
        return res
            .status(404)
            .send(error.message);
    }
}

const createSoldier = async (req, res) => {
    const { name, img, section, platoon, company, medicalProfile, citizinshipID, armyID, religion, address }
        = req.body;


    try {
        await soldierService.createSoldier(name, img, section, platoon, company,
            medicalProfile, citizinshipID, armyID, address, religion);
        return res.send('Soldier created');
    } catch (error) {
        return res
            .status(404)
            .send(error.message);
    }
}

const updateSoldierException = async (req, res) => {
    const {armyID, mode} = req.body;

    try {
        await soldierService.updateSoldierException(armyID, mode);
        return res.send('Updated successfully');
    } catch (error) {
        return res
            .status(404)
            .send(error.message);
    }
}

module.exports = { getSoldier, updateSoldierException, createSoldier };