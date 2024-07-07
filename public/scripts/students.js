document.addEventListener('DOMContentLoaded', function() {
    // Example data, replace with actual data
    const students = [
        { name: 'יוסי כהן', class: 'כיתה א' },
        { name: 'רינה לוי', class: 'כיתה ב' },
        { name: 'אבי ישראלי', class: 'כיתה א' }
    ];

    const tableBody = document.querySelector('#students-table tbody');

    students.forEach(student => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const classCell = document.createElement('td');

        nameCell.textContent = student.name;
        classCell.textContent = student.class;

        row.appendChild(nameCell);
        row.appendChild(classCell);
        tableBody.appendChild(row);
    });
});
