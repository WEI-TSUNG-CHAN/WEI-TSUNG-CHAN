// script.js

const boardSize = 4;  // 4x4 的棋盤
let board = [];
let score = 0;
let highScore = localStorage.getItem("highScore") || 0;  // 儲存最高分
let timer = 0;  // 計時器
let gameInterval;
let gameTimer;

// 初始化棋盤
function initBoard() {
    board = Array.from({ length: boardSize }, () => Array(boardSize).fill(0));
    addNewTile();
    addNewTile();
    score = 0;
    updateDisplay();
    startTimer();
}

// 更新顯示
function updateDisplay() {
    const gridContainer = document.getElementById('grid-container');
    gridContainer.innerHTML = '';

    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
            const cellValue = board[row][col];
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            
            if (cellValue !== 0) {
                cell.textContent = cellValue;
                // 根據數字為格子添加相應的類別
                cell.classList.add(`grid-cell-${cellValue}`);
            }
            gridContainer.appendChild(cell);
        }
    }

    const scoreElement = document.getElementById('score');
    scoreElement.textContent = '分數: ' + score;

    const highScoreElement = document.getElementById('high-score');
    highScoreElement.textContent = '最高分: ' + highScore;

    const timerElement = document.getElementById('timer');
    timerElement.textContent = '時間: ' + timer + 's';
}

// 根據數字決定顏色
function getColorForValue(value) {
    const colors = {
        2: '#c8d6e5',
        4: '#a2c2e1',
        8: '#5d6d7e',
        16: '#2c3e50',
        32: '#34495e',
        64: '#1a2b3c',
        128: '#5b6c7d',
        256: '#2f4050',
        512: '#34495e',
        1024: '#3b4a59',
        2048: '#1e2a33',
    };
    return colors[value] || '#b0b8c1';  // 默認冷色系灰藍色
}

// 隨機增加一個新方塊
function addNewTile() {
    let emptyCells = [];
    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
            if (board[row][col] === 0) {
                emptyCells.push({ row, col });
            }
        }
    }

    if (emptyCells.length === 0) return;

    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    const { row, col } = emptyCells[randomIndex];
    const newValue = Math.random() < 0.9 ? 2 : 4;
    board[row][col] = newValue;
}

// 移動方塊
function move(direction) {
    let moved = false;
    if (direction === 'left') {
        for (let row = 0; row < boardSize; row++) {
            let newRow = board[row].filter(val => val !== 0);
            for (let i = 0; i < newRow.length - 1; i++) {
                if (newRow[i] === newRow[i + 1]) {
                    newRow[i] *= 2;
                    score += newRow[i];
                    newRow.splice(i + 1, 1);
                }
            }
            newRow = newRow.concat(Array(boardSize - newRow.length).fill(0));
            board[row] = newRow;
            moved = true;
        }
    }
    // Implement other directions (up, right, down) similarly
    if (direction === 'right') {
        for (let row = 0; row < boardSize; row++) {
            let newRow = board[row].filter(val => val !== 0).reverse();
            for (let i = 0; i < newRow.length - 1; i++) {
                if (newRow[i] === newRow[i + 1]) {
                    newRow[i] *= 2;
                    score += newRow[i];
                    newRow.splice(i + 1, 1);
                }
            }
            newRow = newRow.concat(Array(boardSize - newRow.length).fill(0)).reverse();
            board[row] = newRow;
            moved = true;
        }
    }

    // For up and down, transpose the board
    if (direction === 'up' || direction === 'down') {
        board = transposeBoard(board);
        if (direction === 'down') board = board.map(row => row.reverse());
        moved = move('left');
        if (direction === 'down') board = board.map(row => row.reverse());
        board = transposeBoard(board);
    }

    if (moved) {
        addNewTile();
        updateDisplay();
    }
}

// 重置遊戲
function resetGame() {
    if (score > highScore) {
        highScore = score;
        localStorage.setItem("highScore", highScore);
    }
    score = 0;
    clearInterval(gameTimer);  // 停止計時器
    timer = 0;  // 重設計時器
    initBoard();
}

// 轉置棋盤（用於上下方向移動）
function transposeBoard(board) {
    return board[0].map((_, colIndex) => board.map(row => row[colIndex]));
}

// 監聽鍵盤事件
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') move('left');
    if (event.key === 'ArrowRight') move('right');
    if (event.key === 'ArrowUp') move('up');
    if (event.key === 'ArrowDown') move('down');
});

// 觸摸事件
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

// 手指滑動的方向
let touchStartX = 0;
let touchStartY = 0;

function handleTouchStart(e) {
    const touch = e.touches[0];
    touchStartX = touch.pageX;
    touchStartY = touch.pageY;
}

function handleTouchMove(e) {
    if (!touchStartX || !touchStartY) return;
    const touch = e.touches[0];
    const diffX = touch.pageX - touchStartX;
    const diffY = touch.pageY - touchStartY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 0) move('right');
        else move('left');
    } else {
        if (diffY > 0) move('down');
        else move('up');
    }

    touchStartX = 0;
    touchStartY = 0;
}

// 計時器功能
function startTimer() {
    gameTimer = setInterval(() => {
        timer++;
        updateDisplay();
    }, 1000);
}

// 初始化遊戲
document.getElementById('reset-button').addEventListener('click', resetGame);
initBoard();
