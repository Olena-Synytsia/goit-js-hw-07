function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector('input[type="number"]');
const btnCreate = document.querySelector(".btn-create");
const btnDestroy = document.querySelector(".btn-destroy");

function createBoxes(amount) {
  const boxContainer = document.getElementById("boxes");
  boxContainer.innerHTML = "";

  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxContainer.appendChild(box);
    size += 10;
  }
}

function destroyBoxes() {
  const boxContainer = document.getElementById("boxes");
  boxContainer.innerHTML = "";
}

btnCreate.addEventListener("click", function () {
  const amount = parseInt(inputNumber.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputNumber.value = "";
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

btnDestroy.addEventListener("click", function () {
  destroyBoxes();
});
