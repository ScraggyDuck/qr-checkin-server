const User = require('../models/user.schema');

const getAllUser = async (req, res) => {
    User.find({}, (error, users) => {
        if (error) {
            return res.send(500).json("Error");
        }
        res.json({ users });
    });
}

const getUserById = async (req, res) => {
    User.findOne({ _id: req.params.id }, (error, user) => {
        if (error) {
            return res.send(500).json("Error");
        }
        if (!user) {
            return res.status(404).json("User can not found");
        }
        res.json({ user });
    });
}

const createUser = async (req, res) => {
    const { fullName } = req.body;
    let user = new User({
        fullName
    });
    user.save((error, user) => {
        if (error) {
            return res.send(500).json({ message: "Could not saved" })
        }
        res.json({ user });
    });
}

module.exports = {
    getAllUser,
    getUserById,
    createUser
}