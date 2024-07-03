const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lockerSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: 'Etudiant', required: true },
}, { timestamps: true });

const Locker = mongoose.model('Locker', lockerSchema);
module.exports = Locker;
