const Section = require('../models/section');

const createSection = async (name, soldiers, commander) => { 
    await Section.create({
        name,
        soldiers,
        commander,
    });

}

const addSoldierToSection = async (sectionId, soldierId) => {
    const section = await Section.findOne(sectionId);

    if (section === null) {
        throw new Error('Section not found');
    }

    section.soldiers.push(soldierId);
    await section.save();
}

const getSection = async (sectionId) => {
    const section = await Section.findOne({ sectionId });
    
    if (section.length === 0) {
        throw new Error('Section not found');
    }

    return section;
}


module.exports = { createSection, addSoldierToSection, getSection };