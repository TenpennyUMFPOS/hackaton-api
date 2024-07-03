const Etudiant = require('../models/Etudiant');
const Locker = require('../models/Locker');

async function openLocker(req, res) {
    const { locker_id } = req.params;
    const { user_id } = req.body;

    try {
        // Find the locker by locker_id and validate owner
        const locker = await Locker.findOne({ locker_id }).populate('user_id');

        if (!locker) {
            return res.status(404).json({ error: 'Locker not found' });
        }

        // Check if user_id matches the owner's _id
        if (locker.user_id._id.toString() !== user_id) {
            return res.status(403).json({ error: 'You are not the owner of this locker' });
        }

        // User is the owner, perform action (e.g., open locker)
        res.json({ message: 'Locker opened successfully' });

    } catch (error) {
        console.error('Error opening locker:', error);
        res.status(500).json({ error: 'Error opening locker' });
    }
}

module.exports = openLocker;
