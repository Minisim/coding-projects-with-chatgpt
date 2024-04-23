const GRID_SIZE = 20;
const SNAKE_SPEED = 150; // milliseconds

let snake = [{ x: 10, y: 10 }];
let food = { x: 5, y: 5 };
let dx = 0;
let dy = 0;
let gameOver = false;

function drawGrid() {
  const gameGrid = document.getElementById("game-grid");
  gameGrid.innerHTML = "";
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      if (isSnake(x, y)) {
        cell.classList.add("snake");
      } else if (x === food.x && y === food.y) {
        cell.classList.add("food");
      }
      gameGrid.appendChild(cell);
    }
  }
}

function isSnake(x, y) {
  return snake.some(segment => segment.x === x && segment.y === y);
}

function moveSnake() {
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };
  snake.unshift(head);
  if (head.x === food.x && head.y === food.y) {
    generateFood();
  } else {
    snake.pop();
  }
}

function generateFood() {
  food = {
    x: Math.floor(Math.random() * GRID_SIZE),
    y: Math.floor(Math.random() * GRID_SIZE)
  };
}

function checkCollision() {
  const head = snake[0];
  if (
    head.x < 0 ||
    head.x >= GRID_SIZE ||
    head.y < 0 ||
    head.y >= GRID_SIZE ||
    isSnake(head.x, head.y)
  ) {
    gameOver = true;
  }
}

function update() {
  if (!gameOver) {
    moveSnake();
    checkCollision();
    drawGrid();
  } else {
    alert("Game Over!");
    resetGame();
  }
}

function resetGame() {
  snake = [{ x: 10, y: 10 }];
  food = { x: 5, y: 5 };
  dx = 0;
  dy = 0;
  gameOver = false;
}

function handleKeyPress(event) {
  switch (event.key) {
    case "ArrowUp":
      dx = 0;
      dy = -1;
      break;
    case "ArrowDown":
      dx = 0;
      dy = 1;
      break;
    case "ArrowLeft":
      dx = -1;
      dy = 0;
      break;
    case "ArrowRight":
      dx = 1;
      dy = 0;
      break;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  drawGrid();
  setInterval(update, SNAKE_SPEED);
  document.addEventListener("keydown", handleKeyPress);
});
