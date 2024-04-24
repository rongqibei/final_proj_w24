document.addEventListener('DOMContentLoaded', function() {

    const toggleButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const tooltipText = document.querySelector('.tooltip-text');
 
    toggleButton.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
       
        let newTheme;
        if (currentTheme === 'dark') {
            newTheme = 'light';
        } else {
            newTheme = 'dark';
        }
        document.documentElement.setAttribute('data-theme', newTheme);
        
        // Remember this theme for the next time the user visits.
        localStorage.setItem('theme', newTheme);
        updateThemeButton(newTheme);
    });

    function updateThemeButton(theme) {
        if (theme === 'dark') {
            themeIcon.textContent = '🌞';
            tooltipText.textContent = 'Bright Mode';
        } else {
            themeIcon.textContent = '🌛';
            tooltipText.textContent = 'Dark Mode';
        }
    }

    // Initialize the theme on load
    const currentTheme = localStorage.getItem('theme');
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeButton(currentTheme);
});
    
