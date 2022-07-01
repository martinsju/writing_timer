// setInterval(startTimer, 1000)

const DEMOTEXT =
    document.querySelector(".demoText");
const TEXTAREA =
    document.querySelector(".textArea");
const RESETBUTTON =
    document.querySelector(".reset-button")

console.log(DEMOTEXT);
console.log(TEXTAREA);
console.log(RESETBUTTON);

function startTimer() {
    console.log("Timer started")
}

function spellCheck() {
    var enteredText = TEXTAREA.value
    console.log(enteredText)
}

function reset() {
    // e.preventDefault();
    console.log("Reset button clicked");
}

TEXTAREA.addEventListener('keypress', startTimer, false)
TEXTAREA.addEventListener('keyup', spellCheck, false)
RESETBUTTON.addEventListener('click', reset, false)