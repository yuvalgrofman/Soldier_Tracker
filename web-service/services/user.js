const {User} = require('../models/user');

const addUser = async (username, password) => {
    const user = await User.findOne({ username });

    if (user !== null) {
        throw new Error('Test already exists');
    }

    await User.create({
        username,
        password
    })
}

const getPassword = async (username) => {
    const user = await User.findOne({ username });

    if (user === null) {
        throw new Error('User not found');
    }

    return user.password;
}

module.exports = { addUser, getPassword };