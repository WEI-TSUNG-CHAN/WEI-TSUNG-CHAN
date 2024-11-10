// 小學三年級字庫與注音
const characters = [
    { char: "日", zhuyin: "ㄖㄧˋ" },
    { char: "月", zhuyin: "ㄩㄝˋ" },
    { char: "山", zhuyin: "ㄕㄢ" },
    { char: "水", zhuyin: "ㄕㄨㄟˇ" },
    { char: "人", zhuyin: "ㄖㄣˊ" },
    { char: "子", zhuyin: "ㄗˇ" },
    { char: "花", zhuyin: "ㄏㄨㄚ" },
    { char: "鳥", zhuyin: "ㄋㄧㄠˇ" },
    { char: "狗", zhuyin: "ㄍㄡˇ" },
    { char: "車", zhuyin: "ㄔㄜ" }
  ];
  
  // 選擇一個隨機漢字
  let currentCharacter = getRandomCharacter();
  let canvas = document.getElementById("writing-canvas");
  let ctx = canvas.getContext("2d");
  
  canvas.width = window.innerWidth - 40;
  canvas.height = 300;
  
  // 畫筆設置
  let drawing = false;
  let lastX = 0;
  let lastY = 0;
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  
  // 更新畫布內容
  function startDrawing(e) {
    drawing = true;
    [lastX, lastY] = getPosition(e);
  }
  
  function draw(e) {
    if (!drawing) return;
    const [x, y] = getPosition(e);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();
    [lastX, lastY] = [x, y];
  }
  
  function stopDrawing() {
    drawing = false;
  }
  
  // 計算觸控位置
  function getPosition(e) {
    const rect = canvas.getBoundingClientRect();
    return [e.touches[0].clientX - rect.left, e.touches[0].clientY - rect.top];
  }
  
  // 清除畫布
  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  
  // 顯示下一個字
  function nextCharacter() {
    currentCharacter = getRandomCharacter();
    document.getElementById("current-character").textContent = currentCharacter.char;
    document.getElementById("current-zhuyin").textContent = currentCharacter.zhuyin;
    clearCanvas();
  }
  
  // 隨機選擇一個漢字
  function getRandomCharacter() {
    return characters[Math.floor(Math.random() * characters.length)];
  }
  
  // 初始化
  document.getElementById("current-character").textContent = currentCharacter.char;
  document.getElementById("current-zhuyin").textContent = currentCharacter.zhuyin;
  
  // 事件綁定
  canvas.addEventListener("touchstart", startDrawing, false);
  canvas.addEventListener("touchmove", draw, false);
  canvas.addEventListener("touchend", stopDrawing, false);
  
  document.getElementById("clear-canvas").addEventListener("click", clearCanvas);
  document.getElementById("next-char").addEventListener("click", nextCharacter);
  