const testService = require('../services/test');

const getTest = async (req, res) => {
    const testLink  = req.params.testLink;

    try {
        const test = await testService.getTest(testLink);
        return res.send(test);
    } catch (error) {
        return res
            .status(404)
            .send(error.message);
    }
}

module.exports = { getTest };