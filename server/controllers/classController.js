const db = require('../db');

exports.createClass = (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).send({ message: 'אנא מלא את שם הכיתה.' });
    }

    const query = 'INSERT INTO classes (name) VALUES (?)';
    db.query(query, [name], (err, result) => {
        if (err) throw err;
        res.send({ message: 'הכיתה נוספה בהצלחה.' });
    });
};

exports.listClasses = (req, res) => {
    const query = 'SELECT * FROM classes';
    db.query(query, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
};
