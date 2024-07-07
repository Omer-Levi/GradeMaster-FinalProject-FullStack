const db = require('../db');
const bcrypt = require('bcryptjs');

exports.updateSettings = (req, res) => {
    const { teacherId, name, password } = req.body;

    if (!teacherId || !name || !password) {
        return res.status(400).send({ message: 'Please fill in all fields.' });
    }

    bcrypt.hash(password, 10, (err, hash) => {
        if (err) throw err;

        const query = 'UPDATE teachers SET name = ?, password = ? WHERE id = ?';
        db.query(query, [name, hash, teacherId], (err, result) => {
            if (err) throw err;
            res.send({ message: 'The settings have been updated successfully.' });
        });
    });
};
