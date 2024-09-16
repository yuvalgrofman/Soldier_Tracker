const Company = require('../models/company');

const createCompany = async (name, platoons, commander) => { 
    const company = await Company.findOne({ name });

    if (company !== null) {
        throw new Error('User already exists');
    }

    await Company.create({
        name,
        platoons,
        commander,
    });

}

const getCompany = async (name) => {
    const company = await Company.findOne({ name });
    
    if (company.length === 0) {
        throw new Error('Company not found');
    }

    return company;
}


module.exports = { createCompany,getCompany };