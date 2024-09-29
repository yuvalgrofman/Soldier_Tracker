const Test = require('../models/test');

const createTest = async (name, link, pass, excellent, type) => {
    const test = await Test.findOne({ link });

    if (test !== null) {
        throw new Error('Test already exists');
    }

    await Test.create({
        name,
        link,
        pass,
        excellent,
        type,
    });

}

const updatePass = async (link, pass) => {
    const test = await Test.findOne({link});

    if (test.length === 0) {
        throw new Error('Test not found');
    }

    test.pass = pass;
    await test.save();
}

const updateExcellent = async (link, excellent) => {
    const test = await Test.findOne({link});

    if (test.length === 0) {
        throw new Error('Test not found');
    }

    test.excellent = excellent;
    await test.save();
}

const getTest = async (link) => {
    const test = await Test.findOne({ link });
    
    if (test.length === 0) {
        throw new Error('Test not found');
    }

    return test;
}


module.exports = { createTest,getTest };