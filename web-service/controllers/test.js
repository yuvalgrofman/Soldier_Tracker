const testService = require('../services/test');

const getTest = async (req, res) => {
    const testName  = req.params.testName;

    try {
        const test = await testService.getTest(testName);
        return res.send(test);
    } catch (error) {
        return res
            .status(404)
            .send(error.message);
    }
}

module.exports = { getTest };