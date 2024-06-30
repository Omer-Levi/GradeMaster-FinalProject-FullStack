document.getElementById('settings-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const teacherName = document.getElementById('teacher-name').value;
    const newPassword = document.getElementById('password').value;

    // Here you would typically save the settings to the server or local storage
    console.log(`Teacher Name: ${teacherName}, New Password: ${newPassword}`);
});
