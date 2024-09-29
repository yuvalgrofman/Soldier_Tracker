const Result = require('../models/result');

const createResult = async (testID, soldierID, score, isCompleted) => { 
    const result = await Result.findOne({ testID, soldierID });

    if (result !== null) {
        throw new Error('Result already exists');
    }

    await Result.create({
        testID,
        soldierID,
        score,
        isCompleted,
    });

}

const getResult = async (testName, soldierID) => {
    const result = await Result.findOne({ testName, soldierID });
    
    if (result.length === 0) {
        throw new Error('Result not found');
    }

    return result;
}

const updateScore = async (testName, soldierID, score) => {
    const result = await Result.findOne({ testName, soldierID });

    if (result === null) {
        throw new Error('Result not found');
    }

    result.score = score;
    result.isCompleted = true;
    await result.save();
    return result;
}

module.exports = { getResult, createResult };