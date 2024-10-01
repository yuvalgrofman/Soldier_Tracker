const Section = require('../models/section');

const createSection = async (name, soldierIds, commander) => { 
    await Section.create({
        name,
        soldierIds,
        commander,
    });
}

const addSoldierToSection = async (sectionId, soldierId) => {
    const section = await getSection(sectionId)

    section.soldierIds.push(soldierId);
    await section.save();
}

const getSection = async (sectionId) => {
    const section = await Section.findById(sectionId);
    
    if (section.length === 0) {
        throw new Error('Section not found');
    }

    return section;
}


module.exports = { createSection, addSoldierToSection, getSection };