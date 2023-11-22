// Retrieve font size and high contrast settings from local storage
var storedFontSize = localStorage.getItem('fontSize');
var storedHighContrast = localStorage.getItem('highContrast');

// Apply stored settings or use default values
document.body.style.fontSize = storedFontSize || '16px'; // Default font size: medium
var contrastCheckbox = document.getElementById('contrastToggle');
contrastCheckbox.checked = storedHighContrast === 'true';
document.body.classList.toggle('high-contrast', contrastCheckbox.checked);

function changeFontSize(size) {
    document.body.style.fontSize = size === 'small' ? '14px' : size === 'medium' ? '16px' : '18px';

    // Save font size setting to local storage
    localStorage.setItem('fontSize', document.body.style.fontSize);
}

function toggleContrast() {
    var contrastCheckbox = document.getElementById('contrastToggle');
    document.body.classList.toggle('high-contrast', contrastCheckbox.checked);

    // Save high contrast setting to local storage
    localStorage.setItem('highContrast', contrastCheckbox.checked);
}
