const Section = require('../models/section');

const createSection = async (name, soldiers, commander, platoon, company) => { 
    const section = await Section.findOne({ name, platoon, company });

    if (section !== null) {
        throw new Error('Section already exists');
    }

    await Section.create({
        name,
        soldiers,
        commander,
        company,
        platoon,
    });

}

const addSoldierToSection = async (sectionId, soldierId) => {
    const section = await Section.findById(sectionId);

    if (section === null) {
        throw new Error('Section not found');
    }

    section.soldiers.push(soldierId);
    await section.save();
}

const getSection = async (name, company, platoon) => {
    const section = await Section.findOne({ name, platoon, company });
    
    if (section.length === 0) {
        throw new Error('Section not found');
    }

    return section;
}


module.exports = { createSection, getSection };