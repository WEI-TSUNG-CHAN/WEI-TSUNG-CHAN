<!DOCTYPE html>
<html lang="zh-Hant">

<head>
  <meta charset="UTF-8">
  <meta name="google-adsense-account" content="ca-pub-2700712381606881">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>小遊戲</title>
  <style>
    /* 設定基本樣式 */
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      background-color: #f4f4f4;
    }

    h1 {
      text-align: center;
      font-size: 2rem;
      margin-top: 20px;
    }

    /* 使用 Flexbox 來布局 */
    .container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
      padding: 20px;
    }

    .game-link, .video-container {
      width: calc(50% - 20px); /* 每個元素佔據50%的寬度，並減去邊距 */
      background-color: white;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      padding: 15px;
      text-align: center;
    }

    .game-link a {
      text-decoration: none;
      color: #333;
      font-size: 1.5rem;
      display: block;
      margin-bottom: 10px;
    }

    .game-link a:hover {
      color: #007BFF;
    }

    .video-container {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
    }

    /* 使視頻等比縮放 */
    video {
      max-width: 100%; /* 寬度最多為容器的100% */
      height: auto; /* 高度自動調整，保持比例 */
      border-radius: 10px;
    }

    /* 響應式設計：小螢幕下調整布局 */
    @media (max-width: 768px) {
      .game-link, .video-container {
        width: 100%; /* 小螢幕上每個元素佔據100%的寬度 */
      }

      h1 {
        font-size: 1.5rem; /* 減小標題字體大小 */
      }
    }
  </style>
</head>

<body>
  <h1>小遊戲</h1>

  <div class="container">
    <div class="game-link">
      <h2><a href="klotski-game/version5x5/index.html">華容道</a></h2>
    </div>
    <div class="game-link">
      <h2><a href="Tetris-game-v1/index.html">俄羅斯方塊</a></h2>
    </div>
    <div class="video-container">
      <video controls>
        <source src="videos/UUFC2409.MP4" type="video/mp4">
        你的瀏覽器不支援視頻標籤。
      </video>
    </div>
    <div class="video-container">
      <video controls>
        <source src="videos/KHCN1273.MP4" type="video/mp4">
        你的瀏覽器不支援視頻標籤。
      </video>
    </div>
  </div>
</body>

</html>
