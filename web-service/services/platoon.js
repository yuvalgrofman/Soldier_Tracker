const Platoon = require('../models/platoon');

const createPlatoon = async (name, sections, commander, company) => { 
    const platoon = await Platoon.findOne({ name, company });

    if (platoon !== null) {
        throw new Error('User already exists');
    }

    await Platoon.create({
        name,
        sections,
        commander,
        company,
    });

}

const getPlatoon = async (name, company) => {
    const platoon = await Platoon.findOne({ name, company });
    
    if (platoon.length === 0) {
        throw new Error('Platoon not found');
    }

    return platoon;
}


module.exports = { createPlatoon, getPlatoon };