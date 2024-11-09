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
      width: 100%;
      text-align: center;
    }

    .game-link a {
      font-size: 1.5em;
      text-decoration: none;
      color: #007bff;
      padding: 12px;
      border-radius: 5px;
      background-color: #e0e0e0;
      transition: background-color 0.3s;
      display: inline-block;
      width: 100%;
      max-width: 300px; /* 限制最大寬度，避免過大 */
      text-align: center;
    }

    .game-link a:hover {
      background-color: #007bff;
      color: white;
    }

    /* 影片容器：保持比例，讓影片自動縮放 */
    .video-container {
      margin: 20px 0;
      width: 100%;
      max-width: 800px;
      position: relative;
      padding-bottom: 56.25%; /* 16:9 的比例，保持影片的高寬比 */
      background-color: #000;
      overflow: hidden;
      border-radius: 10px;
    }

    /* 影片設定：讓影片填滿容器 */
    video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }

    /* 響應式設計：針對小屏幕設備 */
    @media (max-width: 768px) {
      h1 {
        font-size: 1.6em;
      }

      .game-link a {
        font-size: 1.2em;
        padding: 10px;
      }

      .video-container {
        max-width: 100%;
        padding-bottom: 56.25%; /* 保持 16:9 的比例 */
      }
    }

    /* 響應式設計：針對非常小的屏幕設備（如手機） */
    @media (max-width: 480px) {
      h1 {
        font-size: 1.4em;
      }

      .game-link a {
        font-size: 1.1em;
        padding: 8px;
      }

      .video-container {
        max-width: 100%;
        padding-bottom: 56.25%; /* 保持 16:9 的比例 */
      }

      video {
        width: 100%;
        height: 100%;
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
