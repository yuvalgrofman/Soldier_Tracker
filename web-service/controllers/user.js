const userService = require('../services/user');

const addUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        await userService.addUser(username, password);
        return res.send('User added');
    } catch (error) {
        return res
            .status(404)
            .send(error.message);
    }
}

const verifyUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const password = await userService.getPassword(username);
        if (password !== req.body.password) {
            return res.send('Invalid password');
        } else {
            return res.send('User verified');
        }
    } catch (error) {
        return res
            .status(404)
            .send(error.message);
    }
}