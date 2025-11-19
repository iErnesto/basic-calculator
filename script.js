const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // CLEAR
    if (btn.classList.contains("clear")) {
      display.value = "";
      return;
    }

    // DELETE LAST CHARACTER
    if (btn.classList.contains("delete")) {
      display.value = display.value.slice(0, -1);
      return;
    }

    // EQUALS
    if (btn.classList.contains("equal")) {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
        setTimeout(() => (display.value = ""), 1500);
      }
      return;
    }

    // DEFAULT: numbers, dot, operators
    display.value += btn.textContent;
  });
});
