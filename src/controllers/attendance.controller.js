const History = require('../models/attendance.schema');

const getAll = async (req, res) => {
    History.find({}, (error, history) => {
        if (error) {
            return res.send(500).json("Error");
        }
        res.json(history);
    });
}

const getById = async (req, res) => {
    return History.findOne({ userId: req.params.id }, (error, userHistory) => {
        if (error) {
            return res.send(500).json("Error");
        }
        if (!userHistory) {
            return res.json({})
        }
        res.json(userHistory);
    }).sort({ _id: -1 });
}

const create = async (req, res) => {

    const { userId, fullName, isCheckIn } = req.body;
    let userHistory = new History({
        userId,
        fullName,
        isCheckIn
    });
    userHistory.save((error, userHistory) => {
        if (error) {
            throw error;
        }
        res.json(userHistory);
    })
}

module.exports = {
    create,
    getAll,
    getById
}