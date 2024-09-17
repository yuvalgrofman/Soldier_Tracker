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

const getResult = async (testID, soldierID) => {
    const result = await Result.findOne({ testID, soldierID });
    
    if (result.length === 0) {
        throw new Error('Result not found');
    }

    return result;
}

const updateScore = async (testID, soldierID, score) => {
    const result = await Result.findOne({ testID, soldierID });

    if (result === null) {
        throw new Error('Result not found');
    }

    result.score = score;
    result.isCompleted = true;
    await result.save();
}

module.exports = { getResult, createResult };