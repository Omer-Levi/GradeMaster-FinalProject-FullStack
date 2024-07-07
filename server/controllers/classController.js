const db = require('../db');

exports.createClass = (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).send({ message: 'Please fill in the name of the class.' });
    }

    const query = 'INSERT INTO classes (name) VALUES (?)';
    db.query(query, [name], (err, result) => {
        if (err) throw err;
        res.send({ message: 'Class added successfully.' });
    });
};

exports.listClasses = (req, res) => {
    const query = 'SELECT * FROM classes';
    db.query(query, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
};
