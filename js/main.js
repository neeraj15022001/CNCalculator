// Constants
const SUNCLASS = "bi-brightness-high-fill";
const MOONCLASS = "bi-moon-fill";
const upperOperationScreen = document.querySelector(".upper-operation-screen");
const lowerResultString = document.querySelector(".lower-result-screen");
const calcBody = document.querySelector(".calc-body");
const toggler = document.querySelector(".toggler");
const gridItem = document.querySelectorAll(".grid-item");
let operationString = "";
let resultString = "0";

// Event Listeners
const buttons = document.querySelectorAll(".grid-item");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const audio = new Audio();
    audio.src = "../click.wav";
    audio.play();
    const input = button.innerHTML;
    switch (input) {
      case "0":
        operationString += "0 ";
        break;
      case "1":
        operationString += "1 ";
        break;
      case "2":
        operationString += "2 ";
        break;
      case "3":
        operationString += "3 ";
        break;
      case "4":
        operationString += "4 ";
        break;
      case "5":
        operationString += "5 ";
        break;
      case "6":
        operationString += "6 ";
        break;
      case "7":
        operationString += "7 ";
        break;
      case "8":
        operationString += "8 ";
        break;
      case "9":
        operationString += "9 ";
        break;
      case "+":
        operationString += "+ ";
        break;
      case "-":
        operationString += "- ";
        break;
      case "×":
        operationString += "* ";
        break;
      case "÷":
        operationString += "/ ";
        break;
      case ".":
        operationString = operationString.trim();
        operationString += ".";
        break;
      case "%":
        operationString += "% ";
        break;
      case "+/-":
        operationString = `-(${operationString})`;
        break;
      case "=":
        let result = eval(operationString);
        result % 1 == 0
          ? (resultString = result.toString())
          : (resultString = result.toFixed(2));
        break;
      case "C":
        operationString = "";
        resultString = "0";
        break;
      // case "⌫":
      //     operationString = operationString.slice(0, -1);
      //     break;
      default:
        resultString = "Invalid String";
    }
    lowerResultString.innerHTML = resultString;
    upperOperationScreen.innerHTML = operationString;
  });
});
toggler.addEventListener("click", () => {
  const audio = new Audio();
  audio.src = "../toggle.wav";
  audio.play();
  toggler.classList.contains(SUNCLASS) == true ? addMoonClass() : addSunClass();
  changeTheme();
});

// Functions
function changeTheme() {
  let currentTheme = calcBody.dataset.theme;
  if (currentTheme == "dark") {
    calcBody.dataset.theme = "light";
    calcBody.style.backgroundColor = "white";
    upperOperationScreen.style.color = "black";
    toggler.style.color = "var(--theme-grey)";
    gridItem.forEach((item) => {
      item.style.backgroundColor = "white";
      item.style.color = "black";
    });
  } else {
    calcBody.dataset.theme = "dark";
    calcBody.style.backgroundColor = "var(--theme-grey)";
    upperOperationScreen.style.color = "white";
    toggler.style.color = "white";
    gridItem.forEach((item) => {
      item.style.backgroundColor = "var(--theme-grey)";
      item.style.color = "white";
    });
  }
}
function addSunClass() {
  toggler.classList.remove(MOONCLASS);
  toggler.classList.add(SUNCLASS);
}
function addMoonClass() {
  toggler.classList.remove(SUNCLASS);
  toggler.classList.add(MOONCLASS);
}
