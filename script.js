//your code here
// script.js
document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("input");

    // Clear the input field
    document.getElementById("clr").addEventListener("click", function () {
        inputField.value = "";
    });

    // Evaluate the expression when the "=" button is clicked
    document.getElementById("ans").addEventListener("click", function () {
        try {
            inputField.value = eval(inputField.value);
        } catch (error) {
            if (error instanceof SyntaxError) {
                inputField.value = "Error";
            }
        }
    });

    // Handle button clicks for numbers and operators
    const buttons = document.querySelectorAll("button[id^='block'], button[id='plus'], button[id='minus'], button[id='multiply'], button[id='divide'], button[id='dot']");
    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            inputField.value += button.textContent;
        });
    });
});
