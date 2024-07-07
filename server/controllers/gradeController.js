const db = require('../db');

exports.saveGrades = (req, res) => {
    const { studentId, assignmentGrade, examGrade } = req.body;

    if (!studentId || !assignmentGrade || !examGrade) {
        return res.status(400).send({ message: 'Please fill in all fields.' });
    }

    const query = 'INSERT INTO grades (student_id, assignment_grade, exam_grade) VALUES (?, ?, ?)';
    db.query(query, [studentId, assignmentGrade, examGrade], (err, result) => {
        if (err) throw err;
        res.send({ message: 'Grades successfully saved.' });
    });
};

exports.exportGrades = (req, res) => {
    const query = `
        SELECT students.name as student, grades.assignment_grade, grades.exam_grade 
        FROM grades 
        JOIN students ON grades.student_id = students.id
    `;
    db.query(query, (err, results) => {
        if (err) throw err;

        let csvContent = 'data:text/csv;charset=utf-8,';
        csvContent += 'Student name, assignment grade, exam grade\n';

        results.forEach(grade => {
            csvContent += `${grade.student},${grade.assignment_grade},${grade.exam_grade}\n`;
        });

        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', 'attachment; filename=grades.csv');
        res.send(csvContent);
    });
};
