<html lang="zh-Hant">

<head>
  <meta charset="UTF-8">
  <meta name="google-adsense-account" content="ca-pub-2700712381606881">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
  <style>
    /* 基本樣式 */
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }

    h1 {
      text-align: center;
      margin-top: 20px;
      font-size: 2rem;
    }

    /* 使用 Flexbox 使表格響應式 */
    .container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 20px;
    }

    .container a, .container video {
      display: block;
      margin: 10px;
      text-align: center;
      width: 100%;
      max-width: 300px;
      box-sizing: border-box;
    }

    /* 讓影片自適應並等比縮放 */
    .container video {
      width: 100%;
      height: auto;
      max-width: 100%;
    }

    /* 當螢幕小於600px時，將內容調整為垂直排列 */
    @media (max-width: 600px) {
      .container a, .container video {
        width: 100%;
        max-width: 100%;
      }

      h1 {
        font-size: 1.5rem;
      }
    }

    /* 當螢幕大於600px時，將內容排成兩列 */
    @media (min-width: 601px) {
      .container a, .container video {
        width: calc(50% - 20px); /* 兩列顯示，間距為20px */
      }
    }
  </style>
</head>

<body>
  <h1>小遊戲</h1>
  <div class="container">
    <a href="klotski-game/version5x5/index.html">華容道</a>
    <a href="Tetris-game-v1/index.html">俄羅斯方塊</a>
    <video controls>
      <source src="videos/UUFC2409.MP4" type="video/mp4">
    </video>
    <video controls>
      <source src="videos/KHCN1273.MP4" type="video/mp4">
    </video>
  </div>
</body>

</html>
