const resultService = require('../services/result');

const updateResult = async (req, res) => {
    const { testLink, soldierID, score, status } = req.body;

    try {
        const result = await resultService.updateScore(testLink, soldierID, score, status);
        return res.send(result);
    } catch (error) {
        return res
            .status(404)
            .send(error.message);
    }
}

const createResult = async (req, res) => {
    const { testLink, soldierID } = req.body;

    try {
        const result = await resultService.createResult(testLink, soldierID);
        return res.send(result);
    } catch (error) {
        return res
            .status(404)
            .send(error.message);
    }
}

const getResult = async (req, res) => {
    const { testLink, soldierId } = req.params;

    try {
        const result = await resultService.getResult(testLink, soldierId);
        return res.send(result);
    } catch (error) {
        return res
            .status(404)
            .send(error.message);
    }
}

const getResultByObjectId = async (req, res) => {
    const { resultObjectId } = req.params;

    try {
        const result = await resultService.getResultByObjectId(resultObjectId);
        return res.send(result);
    } catch (error) {
        return res
            .status(404)
            .send(error.message);
    }
}

module.exports = { getResult, updateResult, createResult, getResultByObjectId };