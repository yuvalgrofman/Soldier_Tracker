const resultService = require('../services/test');

const getResult = async (req, res) => {
    const { testId, soldierId } = req.body;

    try {
        const result = await resultService.getResult(testId, soldierId);
        return res.send(result);
    } catch (error) {
        return res
            .status(404)
            .send(error.message);
    }
}

const updateResult = async (req, res) => {
    const { testId, soldierId, score } = req.body;

    try {
        const result = await resultService.updateScore(testId, soldierId, score);
        return res.send(result);
    } catch (error) {
        return res
            .status(404)
            .send(error.message);
    }
}

const getResults = async (req, res) => {
    const { testId, soldierId } = req.body;

    try {
        const results = await resultService.getResults(testId, soldierId);
        return res.send(results);
    } catch (error) {
        return res
            .status(404)
            .send(error.message);
    }
}