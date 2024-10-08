const Company = require('../models/company');

const createCompany = async (name, platoonIds, commander) => { 
    const company = await Company.findOne({ name: name });
    if (company !== null) {
        throw new Error('Company already exists');
    }

    await Company.create({
        name,
        platoonIds,
        commander,
    });

}

const updatePlatoons = async (name, platoonIds) => {
    const company = await getCompanyByName(name)
    company.platoonIds = platoonIds
    await company.save()
}

const getCompany = async (companyId) => {   
    const company = await Company.findById({_id: companyId});
    
    if (company.length === 0) {
        throw new Error('Company not found');
    }

    return company;
}

const getCompanyByName = async (name) => {
    const company = await Company.findOne({ name });

    if (company.length === 0) {
        throw new Error('Company not found');
    }

    return company;
}


module.exports = { createCompany, getCompany, getCompanyByName, updatePlatoons };