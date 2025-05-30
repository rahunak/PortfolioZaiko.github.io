document.addEventListener('DOMContentLoaded', () => {
    const themeToggleInput = document.getElementById('theme-toggle-input'); // Changed ID
    const bodyElement = document.body;
    const themeLocalStorageKey = 'themePreference';

    // Function to apply the saved theme or default
    const applyThemePreference = () => {
        const savedTheme = localStorage.getItem(themeLocalStorageKey);
        // Apply to body first
        if (savedTheme === 'dark') {
            bodyElement.classList.add('dark-theme');
        } else {
            bodyElement.classList.remove('dark-theme');
        }

        // Then, if the input element exists, set its checked state
        if (themeToggleInput) {
            if (savedTheme === 'dark') {
                themeToggleInput.checked = true;
            } else {
                themeToggleInput.checked = false;
            }
        }
    };

    // Apply theme on initial page load
    applyThemePreference();

    // Add event listener to the toggle input
    if (themeToggleInput) {
        themeToggleInput.addEventListener('change', () => { // Changed event to 'change'
            if (themeToggleInput.checked) { // Check the 'checked' property
                bodyElement.classList.add('dark-theme');
                localStorage.setItem(themeLocalStorageKey, 'dark');
            } else {
                bodyElement.classList.remove('dark-theme');
                localStorage.setItem(themeLocalStorageKey, 'light');
            }
        });
    } else {
        // Updated warning message
        console.warn('Theme toggle input with ID "theme-toggle-input" not found.');
    }
});
