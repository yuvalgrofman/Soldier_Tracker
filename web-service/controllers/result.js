const resultService = require('../services/result');

const updateResult = async (req, res) => {
    const { testLink, soldierId, score } = req.body;

    try {
        const result = await resultService.updateScore(testLink, soldierId, score);
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

module.exports = { getResult, updateResult };