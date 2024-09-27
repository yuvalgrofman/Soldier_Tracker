const {Test} = require('../models/test');

const createTest = async (name, pass, excellent, type) => { 
    const test = await Test.findOne({ name });

    if (test !== null) {
        throw new Error('Test already exists');
    }

    await Test.create({
        name,
        pass,
        excellent,
        type,
    });

}

const updatePass = async (testID, pass) => {
    const test = await Test.findOne(testID);

    if (test.length === 0) {
        throw new Error('Test not found');
    }

    test.pass = pass;
    await test.save();
}

const updateExcellent = async (testID, excellent) => {
    const test = await Test.findOne(testID);

    if (test.length === 0) {
        throw new Error('Test not found');
    }

    test.excellent = excellent;
    await test.save();
}

const getTest = async (name) => {
    const test = await Test.findOne({ name });
    
    if (test.length === 0) {
        throw new Error('Test not found');
    }

    return test;
}


module.exports = { createTest,getTest };