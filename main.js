const display = document.querySelector("#display");

const buttons = document.querySelectorAll(".btn");

//function to update display
function updateDisplay(value) {
  display.value += value;
}
//function to clear display
function clearDisplay() {
  display.value = "";
}
//function to delete last digit
function deleteLastDigit() {
    display.value = display.value.slice(0, -1);
}
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent;
    if (buttonValue === "=") {
      // Perform calculation when '=' is clicked
      performCalculation();
    } else if (buttonValue === "C") {
      // Clear display when 'C' is clicked
      clearDisplay();
    } else if (buttonValue === "DEL") {
        // delete digit when 'DEL' is clicked
        deleteLastDigit();
    } else {
      // Update display with button value
      updateDisplay(buttonValue);
    }
  });
});
function performCalculation() {
    try {
        const result = eval(display.value); // Using eval for simplicity; consider safer alternatives in production
        display.value = result;
    } catch (error) {
        display.value = `${error}`; // Handle errors gracefully
    }
}
