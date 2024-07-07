const db = require('../db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// פונקציית הרשמה
exports.register = (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).send({ message: 'Please fill in all fields.' });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const query = 'INSERT INTO teachers (name, username, password) VALUES (?, ?, ?)';
    db.query(query, [name, email, hashedPassword], (err, result) => {
        if (err) throw err;
        res.send({ message: 'Registration completed successfully.' });
    });
};

// פונקציית התחברות
exports.login = (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send({ message: 'Please fill in all fields.' });
    }

    const query = 'SELECT * FROM teachers WHERE username = ?';
    db.query(query, [username], (err, results) => {
        if (err) throw err;

        if (results.length === 0) {
            return res.status(401).send({ message: 'Username or password incorrect.' });
        }

        const teacher = results[0];

        bcrypt.compare(password, teacher.password, (err, isMatch) => {
            if (err) throw err;

            if (!isMatch) {
                return res.status(401).send({ message: 'Username or password incorrect.' });
            }

            const token = jwt.sign({ id: teacher.id }, 'your_jwt_secret', { expiresIn: '1h' });
            res.send({ token, teacher: { id: teacher.id, name: teacher.name } });
        });
    });
};
