let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkNumber() {
    let userInput = parseInt(document.getElementById('userInput').value);
    let result = document.getElementById('result');
    attempts++;

    if (userInput < randomNumber) {
        result.textContent = 'Too small!';
        result.style.color = 'red';
    } else if (userInput > randomNumber) {
        result.textContent = 'Too high!';
        result.style.color = 'red';
    } else {
        result.textContent = `Correct! It took you ${attempts} attempts.`;
        result.style.color = 'green';
    }
}
