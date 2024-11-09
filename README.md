<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <meta name="google-adsense-account" content="ca-pub-2700712381606881">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>小遊戲</title>
  <style>
    /* 設置頁面的基本樣式 */
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }

    h1 {
      text-align: center;
      font-size: 2em;
      margin-top: 20px;
    }

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
    }

    .game-link {
      margin: 10px 0;
    }

    .game-link a {
      font-size: 1.2em;
      text-decoration: none;
      color: #007bff;
      padding: 10px;
      border-radius: 5px;
      background-color: #e0e0e0;
      transition: background-color 0.3s;
    }

    .game-link a:hover {
      background-color: #007bff;
      color: white;
    }

    .video-container {
      margin: 20px 0;
      width: 100%;
      max-width: 800px;
    }

    video {
      width: 100%;
      height: auto;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    /* 響應式設計：針對小屏幕設備 */
    @media (max-width: 768px) {
      h1 {
        font-size: 1.5em;
      }

      .game-link a {
        font-size: 1em;
        padding: 8px;
      }
    }

    /* 響應式設計：針對非常小的屏幕設備（如手機） */
    @media (max-width: 480px) {
      .game-link a {
        font-size: 0.9em;
        padding: 6px;
      }

      h1 {
        font-size: 1.2em;
      }
    }
  </style>
</head>

<body>
  <h1>小遊戲</h1>
  <div class="container">
    <div class="game-link">
      <a href="klotski-game/version5x5/index.html">華容道</a>
    </div>
    <div class="game-link">
      <a href="Tetris-game-v1/index.html">俄羅斯方塊</a>
    </div>
    <div class="video-container">
      <video controls>
        <source src="videos/UUFC2409.MP4" type="video/mp4">
      </video>
    </div>
    <div class="video-container">
      <video controls>
        <source src="videos/KHCN1273.MP4" type="video/mp4">
      </video>
    </div>
  </div>
</body>

</html>
