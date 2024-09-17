const companyService = require('../services/company');
const platoonService = require('../services/platoon');
const sectionService = require('../services/section');

const createCompany = async (req, res) => {
    const { name, platoonIds, commander } = req.body;

    try {
        await companyService.createCompany(name, platoonIds, commander);
        return res.send('Company created');
    } catch (error) {
        return res
            .status(404)
            .send(error.message);
    }
}

const createPlatoon = async (req, res) => {
    const { name, sectionIds, commander } = req.body;

    try {
        await platoonService.createPlatoon(name, sectionIds, commander);
        return res.send('Platoon created');
    } catch (error) {
        return res
            .status(404)
            .send(error.message);
    }
}

const createSection = async (req, res) => {
    const { name, soldierIds, commander } = req.body;

    try {
        await sectionService.createSection(name, soldierIds, commander);
        return res.send('Section created');
    } catch (error) {
        return res
            .status(404)
            .send(error.message);
    }
}

const addSoldierToSection = async (req, res) => {
    const { sectionId, soldierId } = req.body;

    try {
        await sectionService.addSoldierToSection(sectionId, soldierId);
        return res.send('Soldier added to section');
    } catch (error) {
        return res
            .status(404)
            .send(error.message);
    }
}

module.exports = { createCompany, createPlatoon, createSection, addSoldierToSection };