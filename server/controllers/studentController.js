const db = require('../db');

exports.listStudents = (req, res) => {
    const query = `
        SELECT students.id, students.name, classes.name as class 
        FROM students 
        LEFT JOIN classes ON students.class_id = classes.id
    `;
    db.query(query, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
};
