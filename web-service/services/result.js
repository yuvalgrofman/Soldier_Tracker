const Result = require('../models/result');

const createResult = async (testLink, soldierID, score, isCompleted) => {
    const result = await Result.findOne({ testLink, soldierID });

    if (result !== null) {
        throw new Error('Result already exists');
    }

    await Result.create({
        testLink,
        soldierID,
        score,
        isCompleted,
    });

}

const getResult = async (testLink, soldierID) => {
    const result = await Result.findOne({ testLink, soldierID });
    
    if (result.length === 0) {
        throw new Error('Result not found');
    }

    return result;
}

const getResultByObjectId = async (resultObjectId) => {
    const result = await Result.findOne({ _id: resultObjectId });

    if (result.length === 0) {
        throw new Error('Result not found');
    }

    return result;
}

const updateScore = async (testLink, soldierID, score, status) => {
    const result = await Result.findOne({ testLink, soldierID });

    if (result === null) {
        throw new Error('Result not found');
    }

    result.status = status;
    result.score = score;
    result.isCompleted = true;
    await result.save();
    return result;
}

module.exports = { getResult, createResult, getResultByObjectId };