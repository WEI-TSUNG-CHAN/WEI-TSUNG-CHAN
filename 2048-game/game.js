// game.js
const grid = Array(16).fill(0);  // 儲存16個格子的數值，初始化為0
let score = 0;  // 初始分數

const gridContainer = document.getElementById("grid-container");
const scoreElement = document.getElementById("score");

// 初始化遊戲格子
function initGame() {
  for (let i = 0; i < 16; i++) {
    const cell = document.getElementById(`cell-${i}`);
    cell.innerText = grid[i] === 0 ? "" : grid[i];
    cell.style.backgroundColor = getCellColor(grid[i]);
  }
  scoreElement.innerText = "分數: " + score;
  addRandomNumber();
  addRandomNumber();
}

// 隨機生成一個2或4，並放在空的格子中
function addRandomNumber() {
  const emptyCells = grid.map((value, index) => value === 0 ? index : -1).filter(index => index !== -1);
  const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  grid[randomIndex] = Math.random() < 0.9 ? 2 : 4;  // 90% 機率生成 2，10% 機率生成 4
  initGame();
}

// 根據數字大小設定格子顏色
function getCellColor(number) {
  switch (number) {
    case 2: return "#eee4da";
    case 4: return "#ede0c8";
    case 8: return "#f2b179";
    case 16: return "#f59563";
    case 32: return "#f67c5f";
    case 64: return "#f65e3b";
    case 128: return "#edcf72";
    case 256: return "#edcc61";
    case 512: return "#edc850";
    case 1024: return "#edc53f";
    case 2048: return "#edc22e";
    default: return "#ccc0b3";
  }
}

// 監聽方向鍵事件
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    move("up");
  } else if (event.key === "ArrowDown") {
    move("down");
  } else if (event.key === "ArrowLeft") {
    move("left");
  } else if (event.key === "ArrowRight") {
    move("right");
  }
});

// 處理移動邏輯
function move(direction) {
  // 根據方向進行格子合併和移動邏輯（簡化版）
  // 這部分可以根據需求進行實現，這裡給出一個簡單的示範

  // 進行合併邏輯和格子更新
  // 然後重新生成隨機數字

  addRandomNumber();
}

// 開始遊戲
initGame();
