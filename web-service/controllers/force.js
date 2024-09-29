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

const getSection = async (req, res) => {
    const { sectionId } = req.params;

    try {
        const section = await sectionService.getSection(sectionId);
        return res.send(section);
    } catch (error) {
        return res
            .status(404)
            .send(error.message);
    }
}

const getCompany = async (req, res) => {
    const { companyId } = req.params;

    try {
        const company = await companyService.getCompany(companyId);
        return res.send(company);
    } catch (error) {
        return res
            .status(404)
            .send(error.message);
    }
}

const getPlatoon = async (req, res) => {
    const { platoonId } = req.params;

    try {
        const platoon = await platoonService.getPlatoon(platoonId);
        return res.send(platoon);
    } catch (error) {
        return res
            .status(404)
            .send(error.message);
    }
}

module.exports = { getCompany, getPlatoon, getSection,
    createCompany, createPlatoon, createSection,
    addSoldierToSection };