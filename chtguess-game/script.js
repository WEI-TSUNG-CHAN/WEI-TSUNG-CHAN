const wordList = [
    { character: '學', pinyin: 'ㄒㄩˊ' },
    { character: '習', pinyin: 'ㄒㄧˊ' },
    { character: '書', pinyin: 'ㄕㄨ' },
    { character: '快', pinyin: 'ㄎㄨㄞˋ' },
    { character: '樂', pinyin: 'ㄌㄜˋ' },
    { character: '家', pinyin: 'ㄐㄧㄚ' },
    { character: '愛', pinyin: 'ㄞˋ' },
    { character: '天', pinyin: 'ㄊㄧㄢ' },
    { character: '地', pinyin: 'ㄉㄧˋ' },
    { character: '人', pinyin: 'ㄖㄣˊ' },
    { character: '大', pinyin: 'ㄉㄚˋ' },
    { character: '小', pinyin: 'ㄒㄧㄠˇ' },
    { character: '水', pinyin: 'ㄕㄨㄟˇ' },
    { character: '火', pinyin: 'ㄏㄨㄛˇ' },
    { character: '土', pinyin: 'ㄊㄨˇ' },
    { character: '風', pinyin: 'ㄈㄥ' },
    { character: '雲', pinyin: 'ㄩˊㄣ' },
    { character: '星', pinyin: 'ㄒㄧㄥ' },
    { character: '月', pinyin: 'ㄩㄝˋ' },
    { character: '日', pinyin: 'ㄖˋ' },
    { character: '眼', pinyin: 'ㄧㄢˇ' },
    { character: '耳', pinyin: 'ㄦˇ' },
    { character: '口', pinyin: 'ㄎㄡˇ' },
    { character: '手', pinyin: 'ㄕㄡˇ' },
    { character: '腳', pinyin: 'ㄐㄧㄠˇ' },
    { character: '心', pinyin: 'ㄒㄧㄣ' },
    { character: '快', pinyin: 'ㄎㄨㄞˋ' },
    { character: '慢', pinyin: 'ㄇㄢˋ' },
    { character: '高', pinyin: 'ㄍㄠ' },
    { character: '低', pinyin: 'ㄉㄧ' },
    { character: '好', pinyin: 'ㄏㄠˇ' },
    { character: '壞', pinyin: 'ㄏㄨㄞˋ' },
    { character: '笑', pinyin: 'ㄒㄧㄠˋ' },
    { character: '哭', pinyin: 'ㄎㄨ' },
    { character: '冷', pinyin: 'ㄌㄥˇ' },
    { character: '熱', pinyin: 'ㄖㄜˋ' },
    { character: '大海', pinyin: 'ㄉㄚˋ ㄏㄞˇ' },
    { character: '山', pinyin: 'ㄕㄢ' },
    { character: '河', pinyin: 'ㄏㄜˊ' },
    { character: '魚', pinyin: 'ㄩˊ' },
    { character: '鳥', pinyin: 'ㄋㄧㄠˇ' },
    { character: '馬', pinyin: 'ㄇㄚˇ' },
    { character: '狗', pinyin: 'ㄍㄡˇ' },
    { character: '貓', pinyin: 'ㄇㄠ' },
    { character: '熊', pinyin: 'ㄒㄩㄥ' },
    { character: '兔', pinyin: 'ㄊㄨˋ' },
    { character: '狼', pinyin: 'ㄌㄤˊ' },
    { character: '豬', pinyin: 'ㄓㄨ' },
    { character: '雞', pinyin: 'ㄐㄧ' },
    { character: '牛', pinyin: 'ㄋㄧㄡˊ' },
    { character: '羊', pinyin: 'ㄧㄤˊ' },
    { character: '蟲', pinyin: 'ㄔㄨㄥˊ' },
    { character: '花', pinyin: 'ㄏㄨㄚ' },
    { character: '草', pinyin: 'ㄘㄠˇ' },
    { character: '樹', pinyin: 'ㄕㄨˋ' },
    { character: '果', pinyin: 'ㄍㄨㄛˇ' },
    { character: '食', pinyin: 'ㄕˊ' },
    { character: '飲', pinyin: 'ㄧㄣˇ' },
    { character: '水', pinyin: 'ㄕㄨㄟˇ' },
    { character: '書', pinyin: 'ㄕㄨ' },
    { character: '音', pinyin: 'ㄧㄣ' },
    { character: '樂', pinyin: 'ㄌㄜˋ' },
    { character: '歌', pinyin: 'ㄍㄜ' },
    { character: '舞', pinyin: 'ㄨˇ' },
    { character: '畫', pinyin: 'ㄏㄨㄚˋ' },
    { character: '文', pinyin: 'ㄨㄣˊ' },
    { character: '語', pinyin: 'ㄩˇ' },
    { character: '英', pinyin: 'ㄧㄥ' },
    { character: '數', pinyin: 'ㄕㄨˋ' },
    { character: '學', pinyin: 'ㄒㄩˊ' },
    { character: '問', pinyin: 'ㄨㄣˋ' },
    { character: '答', pinyin: 'ㄉㄚˊ' },
    { character: '作', pinyin: 'ㄗㄨㄛˋ' },
    { character: '業', pinyin: 'ㄧㄝˋ' },
    { character: '功', pinyin: 'ㄍㄨㄥ' },
    { character: '課', pinyin: 'ㄎㄜˋ' },
    { character: '試', pinyin: 'ㄕˋ' },
    { character: '題', pinyin: 'ㄊㄧˊ' },
    { character: '作', pinyin: 'ㄗㄨㄛˋ' },
    { character: '業', pinyin: 'ㄧㄝˋ' },
    { character: '有', pinyin: 'ㄧㄡˇ' },
    { character: '無', pinyin: 'ㄨˊ' },
    { character: '是', pinyin: 'ㄕˋ' },
    { character: '否', pinyin: 'ㄈㄡˇ' },
    { character: '對', pinyin: 'ㄉㄨㄟˋ' },
    { character: '錯', pinyin: 'ㄘㄨㄛˋ' },
    // 當然，這邊還可以繼續擴充
];

// 隨機選擇一個字
function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex];
}

let currentWord = getRandomWord();

// 初始化畫布
const canvas = document.getElementById('writingCanvas');
const ctx = canvas.getContext('2d');

// 設定畫布大小固定
const canvasWidth = 500;
const canvasHeight = 300;
canvas.width = canvasWidth;
canvas.height = canvasHeight;

// 顯示字和注音提示
function updateWordDisplay() {
    document.getElementById('character').textContent = currentWord.character;
    document.getElementById('pinyin').textContent = currentWord.pinyin;
}

// 清空畫布
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// 開始畫字
let isDrawing = false;
let lastX = 0;
let lastY = 0;

// 處理觸控事件
function getTouchPos(e) {
    const rect = canvas.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const y = e.touches[0].clientY - rect.top;
    return { x, y };
}

// 手指觸控開始
canvas.addEventListener('touchstart', (e) => {
    isDrawing = true;
    const { x, y } = getTouchPos(e);
    lastX = x;
    lastY = y;
    e.preventDefault();
});

// 手指觸控移動
canvas.addEventListener('touchmove', (e) => {
    if (!isDrawing) return;
    const { x, y } = getTouchPos(e);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();
    lastX = x;
    lastY = y;
    e.preventDefault();
});

// 手指觸控結束
canvas.addEventListener('touchend', () => {
    isDrawing = false;
});

// 鼠標事件處理（桌面設備）
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});

canvas.addEventListener('mousemove', (e) => {
    if (!isDrawing) return;
    const currentX = e.offsetX;
    const currentY = e.offsetY;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(currentX, currentY);
    ctx.stroke();
    lastX = currentX;
    lastY = currentY;
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});

canvas.addEventListener('mouseout', () => {
    isDrawing = false;
});

// 切換到下一個字
document.getElementById('nextWordBtn').addEventListener('click', () => {
    currentWord = getRandomWord(); // 隨機選擇字
    clearCanvas();
    updateWordDisplay();
});

// 初始化遊戲
updateWordDisplay();

// 清除畫布
document.getElementById('clearCanvasBtn').addEventListener('click', clearCanvas);
