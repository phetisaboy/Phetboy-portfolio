const toggleButton = document.getElementById('theme-toggle');

// Check saved preference on page load
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    toggleButton.textContent = '☀️';
}

toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('light-mode')) {
        toggleButton.textContent = '☀️';
        localStorage.setItem('theme', 'light');
    } else {
        toggleButton.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    }
});