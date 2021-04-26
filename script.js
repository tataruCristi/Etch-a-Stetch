const container = document.querySelector(".grid-container");
const grayBtn = document.querySelector("#grayBtn");
const blackBtn = document.querySelector("#blackBtn");
const rgbBtn = document.querySelector("#rgbBtn");
const resetBtn = document.querySelector("#resetBtn");
const sizeBtn = document.querySelector("#sizeBtn");

function createGrid(col, rows) {
  for (let i = 0; i < col * rows; i++) {
    const div = document.createElement("div");
    div.style.border = "1px solid black";
    container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    container.appendChild(div).classList.add("box");
  }
}

function randomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

createGrid(16, 16);

function grayColor() {
  const boxes = document.querySelectorAll(".box");
  grayBtn.addEventListener("click", () => {
    boxes.forEach((box) =>
      box.addEventListener("mouseover", () => {
        let rNum = Math.floor(Math.random() * 255);
        box.style.background = `rgb(${rNum}, ${rNum}, ${rNum})`;
      })
    );
  });
}

grayColor();

function blackColor() {
  const boxes = document.querySelectorAll(".box");
  blackBtn.addEventListener("click", () => {
    boxes.forEach((box) =>
      box.addEventListener("mouseover", () => {
        box.style.background = "black";
      })
    );
  });
}

blackColor();

function rgbColor() {
  const boxes = document.querySelectorAll(".box");
  rgbBtn.addEventListener("click", () => {
    boxes.forEach((box) =>
      box.addEventListener("mouseover", () => {
        let R = Math.floor(Math.random() * 255);
        let G = Math.floor(Math.random() * 255);
        let B = Math.floor(Math.random() * 255);
        box.style.background = `rgb(${R}, ${G}, ${B})`;
      })
    );
  });
}

rgbColor();

function reset() {
  const boxes = document.querySelectorAll(".box");
  resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => (box.style.background = "white"));
  });
}

reset();

// function changeSize() {
//   const boxes = document.querySelectorAll(".box");

//   sizeBtn.addEventListener("click", () => {
//     let size = prompt("What size would you like?");
//     boxes.forEach((box) => box.remove());
//     if (size === null || size < 1) {
//       createGrid(16, 16);
//       blackColor();
//       grayColor();
//       rgbColor();
//       reset();
//     } else {
//       createGrid(size, size);
//       blackColor();
//       grayColor();
//       rgbColor();
//       reset();
//     }
//   });
// }

// changeSize();
