const price = document.querySelector("#price");
const output = document.querySelector(".price-output");

price.addEventListener("input", () => {
  let priceValue = price.value;
  output.textContent = priceValue;
  const views = document.querySelector(".views");

  if (circle2.style.display === "block") {
    output.textContent = priceValue * 12 * 0.75;
  }

  const backgroundColoring = (x, y) => {
    price.style.background = `
      linear-gradient(
        to right,
        #a4f3eb 0%,
        #a4f3eb ${x}%,
        #ecf0fb 0%,
        #ecf0fb 100%
      )`;
    views.innerHTML = y;
  };
  switch (priceValue) {
    case "8":
      backgroundColoring(0, "10k");
      break;
    case "12":
      backgroundColoring(14.28, "50k");
      break;
    case "16":
      backgroundColoring(28.57, "100k");
      break;
    case "20":
      backgroundColoring(42.85, "200k");
      break;
    case "24":
      backgroundColoring(57.14, "400k");
      break;
    case "28":
      backgroundColoring(71.42, "600k");
      break;
    case "32":
      backgroundColoring(85.71, "800k");
      break;
    case "36":
      backgroundColoring(100, "1m");
      break;
  }
  views.style.textTransform = "uppercase";
});

const choiceContainer = document.querySelector(".choice-input");
const circle1 = document.querySelector(".circle-left");
const circle2 = document.querySelector(".circle-right");
const date = document.querySelector(".date");
let firstChosed = true;

choiceContainer.addEventListener("click", () => {
  let priceValue = price.value;
  if (firstChosed === true) {
    firstChosed = false;
    circle1.style.display = "none";
    circle2.style.display = "block";
    date.innerHTML = "/ year";
    output.textContent = priceValue * 12 * 0.75;
  } else {
    firstChosed = true;
    circle1.style.display = "block";
    circle2.style.display = "none";
    date.innerHTML = "/ month";
    output.textContent /= 9;
  }
});
