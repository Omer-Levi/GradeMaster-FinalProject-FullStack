document.getElementById('grades-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const studentName = document.getElementById('student-name').value;
    const assignmentGrade = document.getElementById('assignment-grade').value;
    const examGrade = document.getElementById('exam-grade').value;

    // Here you would typically save the grades to the server or local storage
    console.log(`Student: ${studentName}, Assignment Grade: ${assignmentGrade}, Exam Grade: ${examGrade}`);
});

document.getElementById('export-csv').addEventListener('click', function() {
    // Example data, replace with actual data
    const grades = [
        { name: 'יוסי כהן', assignment: 85, exam: 90 },
        { name: 'רינה לוי', assignment: 78, exam: 85 },
        { name: 'אבי ישראלי', assignment: 92, exam: 88 }
    ];

    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "שם הסטודנט,ציון מטלה,ציון בחינה\n";

    grades.forEach(grade => {
        csvContent += `${grade.name},${grade.assignment},${grade.exam}\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "grades.csv");
    document.body.appendChild(link);

    link.click();
});
