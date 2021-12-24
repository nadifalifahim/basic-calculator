const btnContainer = document.querySelectorAll(".btn-container button");
const numMain = document.getElementById("num-main");
const numSecondary = document.getElementById("num-secondary");
let currentOperation;
let newOperation = true;

btnContainer.forEach((button) => {
  button.addEventListener("click", () => {
    button.style.filter = "brightness(50%)";
    setTimeout(() => {
      button.style.filter = "brightness(100%)";
    }, 50);
  });

  if (!isNaN(button.innerText)) {
    button.addEventListener("click", () => {
      if (newOperation) {
        numMain.innerText = "";
        newOperation = false;
      }
      numMain.innerText += button.innerText;
    });
  } else {
    switch (button.innerText) {
      case "AC":
        button.addEventListener("click", () => {
          numMain.innerText = "";
          numSecondary.innerText = "";
        });
        break;
      case "DEL":
        button.addEventListener("click", () => {
          numMain.innerText = numMain.innerText.slice(0, -1);
        });
        break;
      case ".":
        button.addEventListener("click", () => {
          if (!numMain.innerText.includes(".")) {
            numMain.innerText += button.innerText;
          }
        });
        break;
      case "+":
        button.addEventListener("click", () => {
          if (numMain.innerText != "") {
            if (numSecondary.innerText != "") {
              numSecondary.innerText = `${
                parseFloat(numMain.innerText) +
                parseFloat(numSecondary.innerText)
              } ${button.innerText}`;
            } else {
              numSecondary.innerText = `${numMain.innerText} ${button.innerText}`;
            }
            numMain.innerText = "";
            currentOperation = button.innerText;
          }
        });
        break;
      case "+":
        button.addEventListener("click", () => {
          if (numMain.innerText != "") {
            if (numSecondary.innerText != "") {
              numSecondary.innerText = `${
                parseFloat(numMain.innerText) +
                parseFloat(numSecondary.innerText)
              } ${button.innerText}`;
            } else {
              numSecondary.innerText = `${numMain.innerText} ${button.innerText}`;
            }
            numMain.innerText = "";
            currentOperation = button.innerText;
          }
        });
        break;
      case "-":
        button.addEventListener("click", () => {
          if (numMain.innerText != "") {
            if (numSecondary.innerText != "") {
              numSecondary.innerText = `${
                parseFloat(numMain.innerText) -
                parseFloat(numSecondary.innerText)
              } ${button.innerText}`;
            } else {
              numSecondary.innerText = `${numMain.innerText} ${button.innerText}`;
            }
            numMain.innerText = "";
            currentOperation = button.innerText;
          }
        });
        break;
      case "*":
        button.addEventListener("click", () => {
          if (numMain.innerText != "") {
            if (numSecondary.innerText != "") {
              numSecondary.innerText = `${
                parseFloat(numMain.innerText) *
                parseFloat(numSecondary.innerText)
              } ${button.innerText}`;
            } else {
              numSecondary.innerText = `${numMain.innerText} ${button.innerText}`;
            }
            numMain.innerText = "";
            currentOperation = button.innerText;
          }
        });
        break;
      case "/":
        button.addEventListener("click", () => {
          if (numMain.innerText != "") {
            if (numSecondary.innerText != "") {
              numSecondary.innerText = `${
                parseFloat(numSecondary.innerText) /
                parseFloat(numMain.innerText)
              } ${button.innerText}`;
            } else {
              numSecondary.innerText = `${numMain.innerText} ${button.innerText}`;
            }
            numMain.innerText = "";
            currentOperation = button.innerText;
          }
        });
        break;
      case "%":
        button.addEventListener("click", () => {
          if (numMain.innerText != "") {
            if (numSecondary.innerText != "") {
              numSecondary.innerText = `${
                parseFloat(numSecondary.innerText) %
                parseFloat(numMain.innerText)
              } ${button.innerText}`;
            } else {
              numSecondary.innerText = `${numMain.innerText} ${button.innerText}`;
            }
            numMain.innerText = "";
            currentOperation = button.innerText;
          }
        });
        break;
      case "=":
        button.addEventListener("click", () => {
          if (numMain.innerText == "" || numSecondary.innerText == "") return;
          switch (currentOperation) {
            case "+":
              numMain.innerHTML =
                parseFloat(numMain.innerHTML) +
                parseFloat(numSecondary.innerText);
              numSecondary.innerText = "";
              newOperation = true;
              break;
            case "-":
              numMain.innerHTML =
                parseFloat(numMain.innerHTML) -
                parseFloat(numSecondary.innerText);
              numSecondary.innerText = "";
              newOperation = true;
              break;
            case "*":
              numMain.innerHTML =
                parseFloat(numMain.innerHTML) *
                parseFloat(numSecondary.innerText);
              numSecondary.innerText = "";
              newOperation = true;
              break;
            case "/":
              numMain.innerHTML =
                parseFloat(numSecondary.innerText) /
                parseFloat(numMain.innerHTML);
              numSecondary.innerText = "";
              newOperation = true;
              break;
            case "%":
              numMain.innerHTML =
                parseFloat(numSecondary.innerText) %
                parseFloat(numMain.innerHTML);
              numSecondary.innerText = "";
              newOperation = true;
              break;
          }
        });
        break;
    }
  }
});
