function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector(".change-color");
const bodyColor = document.querySelector("body");
console.log(changeColor);
console.log(bodyColor);

changeColor.addEventListener("click", getRandomHexColor);

const colors = [
  "black",
  "green",
  "mint",
  "olive",
  "yellow",
  "blue",
  "pink",
  "grey",
  "purple",
  "violet",
  "orange",
  "ultramarine",
  "lavender",
  "saffron",
  "tangerine ",
];
