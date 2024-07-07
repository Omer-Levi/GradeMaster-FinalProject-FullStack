document.getElementById('class-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const className = document.getElementById('class-name').value;
    const classFile = document.getElementById('class-file').files[0];

    if (!classFile) {
        alert('Please select a CSV file.');
        return;
    }

    // Reading CSV file (this example assumes a very simple CSV structure)
    const reader = new FileReader();
    reader.onload = function(event) {
        const csvData = event.target.result;
        console.log(`Class Name: ${className}`);
        console.log(`CSV Data: ${csvData}`);
        
        // Add the class to the list
        const classList = document.getElementById('class-list');
        const listItem = document.createElement('li');
        listItem.textContent = className;
        classList.appendChild(listItem);
        
        // Optionally, store class information in localStorage or send to server
    };
    reader.readAsText(classFile);
});
