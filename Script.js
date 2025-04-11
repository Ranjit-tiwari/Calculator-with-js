
// GEt the input display
const display = document.getElementById('display');

// Get all the buttons
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === 'clear') {
            clearDisplay();
        } else if (value === 'backspace') {
            deleteLastCharacter();
        } else if (value === '=') {
            calculateResult();
        } else {
            appendToDisplay(value);
        }
    });
});

// Append the button value to the Display
function appendToDisplay(value) {
    if (display.value === '0' && value !== '.') {

        display.value = value;
    }
    else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = '';
}

function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}


function calculateResult() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = 'error';
    }
}