const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HistorySchema = new Schema({
    userId: String,
    fullName: String,
    isCheckIn: Boolean,
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('History', HistorySchema);