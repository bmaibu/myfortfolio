const display = document.getElementById("display");
let openParenNext = true;

// Insert text at cursor position
function addToDisplay(value) {
  const start = display.selectionStart;
  const end = display.selectionEnd;
  const currentValue = display.value;

  // Handle parentheses toggle
  if (value === '()') {
    value = openParenNext ? '(' : ')';
    openParenNext = !openParenNext;
  }

  // Insert value at cursor position or replace selection
  display.value = currentValue.slice(0, start) + value + currentValue.slice(end);

  // Move cursor after inserted value
  const newCursorPos = start + value.length;
  display.setSelectionRange(newCursorPos, newCursorPos);
  display.focus();
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  const errors = ["Error", "Syntax Error", "⚠️", "⚠️ Syntax!"];
  if (errors.includes(display.value)) {
    clearDisplay();
  } else {
    const start = display.selectionStart;
    const end = display.selectionEnd;

    if (start === end) {
      // No text selected, delete one character before the cursor
      display.value = display.value.slice(0, start - 1) + display.value.slice(end);
      display.setSelectionRange(start - 1, start - 1);
    } else {
      // Text selected, delete selection
      display.value = display.value.slice(0, start) + display.value.slice(end);
      display.setSelectionRange(start, start);
    }
  }
  display.focus();
}

function goToProjects() {
  window.location.href = "projects.html";
}

function goHome() {
  window.location.href = "index.html";
}
