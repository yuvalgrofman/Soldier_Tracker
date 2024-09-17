const companyService = require('../services/test');

const createCompany = async (req, res) => {
    const { name, numPlatoons} = req.body;

    try {
        await companyService.createCompany(name, img, companyID, address);
        return res.send('Company created');
    } catch (error) {
        return res
            .status(404)
            .send(error.message);
    }
}