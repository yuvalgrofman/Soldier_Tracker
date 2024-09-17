const testService = require('../services/test');

const getTest = async (req, res) => {
    const { name }  = req.body;

    try {
        const test = await testService.getTest(name);
        return res.send(test);
    } catch (error) {
        return res
            .status(404)
            .send(error.message);
    }
}