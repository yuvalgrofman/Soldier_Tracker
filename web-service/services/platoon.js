const Platoon = require('../models/platoon');

const createPlatoon = async (name, sectionIds, commander) => { 
    await Platoon.create({
        name,
        sectionIds,
        commander,
    });

}

const getPlatoon = async (platoonId) => {
    const platoon = await Platoon.findById( platoonId );
    
    if (platoon.length === 0) {
        throw new Error('Platoon not found');
    }

    return platoon;
}


module.exports = { createPlatoon, getPlatoon };