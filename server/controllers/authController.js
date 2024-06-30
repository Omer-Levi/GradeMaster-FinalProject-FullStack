const db = require('../db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send({ message: 'אנא מלא את כל השדות.' });
    }

    const query = 'SELECT * FROM teachers WHERE username = ?';
    db.query(query, [username], (err, results) => {
        if (err) throw err;

        if (results.length === 0) {
            return res.status(401).send({ message: 'שם משתמש או סיסמה שגויים.' });
        }

        const teacher = results[0];

        bcrypt.compare(password, teacher.password, (err, isMatch) => {
            if (err) throw err;

            if (!isMatch) {
                return res.status(401).send({ message: 'שם משתמש או סיסמה שגויים.' });
            }

            const token = jwt.sign({ id: teacher.id }, 'your_jwt_secret', { expiresIn: '1h' });
            res.send({ token, teacher: { id: teacher.id, name: teacher.name } });
        });
    });
};
