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
      overflow-x: hidden;  /* 防止橫向滾動條 */
    }

    h1 {
      font-size: 6vw; /* 根據螢幕寬度自動縮放 */
      margin: 10px;
      padding-left: 10px;  /* 靠左對齊 */
      color: #333;
    }

    .container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;  /* 這裡改為 flex-start，使所有項目靠左對齊 */
      padding: 10px;
      width: 100%;
      box-sizing: border-box;
    }

    .game-link {
      margin: 10px 0;
      width: 100%;
      text-align: left;  /* 連結靠左對齊 */
    }

    .game-link a {
      font-size: 4vw; /* 根據螢幕寬度縮放字體 */
      text-decoration: none;
      color: #007bff;
      padding: 5vw; /* 根據螢幕縮放間距 */
      border-radius: 5px;
      background-color: #e0e0e0;
      transition: background-color 0.3s;
      display: inline-block;
      width: 80%; /* 避免連結太大，給與適當的寬度 */
      max-width: 350px;
      text-align: left;  /* 連結內文字靠左對齊 */
    }

    .game-link a:hover {
      background-color: #007bff;
      color: white;
    }

    /* 影片容器：保持比例，讓影片自動縮放 */
    .video-container {
      margin: 20px 0;
      width: 100%;
      max-width: 100%;
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
        font-size: 8vw;
      }

      .game-link a {
        font-size: 5vw;
        padding: 4vw;
      }

      .video-container {
        padding-bottom: 56.25%; /* 保持 16:9 的比例 */
      }
    }

    /* 響應式設計：針對非常小的屏幕設備（如手機） */
    @media (max-width: 480px) {
      h1 {
        font-size: 10vw;
      }

      .game-link a {
        font-size: 6vw;
        padding: 3vw;
      }

      .video-container {
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
    <div class="game-link">
      <a href="chtguess-game/index.html">中文字寫練習(手機)</a>
    </div>
    <div class="video-container">
      <video controls>
        <source src="https://youtube.com/shorts/i7vKBM8397I?feature=share" type="video/mp4">
      </video>
    </div>
    <div class="video-container">
      <video controls>
        <source src="https://youtube.com/shorts/TQooyM9kOuc?feature=share" type="video/mp4">
      </video>
    </div>
  </div>
</body>

</html>
