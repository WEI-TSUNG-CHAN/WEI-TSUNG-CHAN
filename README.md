<!DOCTYPE html>
<html lang="zh-Hant">

<head>
  <meta charset="UTF-8">
  <meta name="google-adsense-account" content="ca-pub-2700712381606881">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
  <title>小遊戲</title>
  <style>
    /* 全局樣式 */
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f9;
      text-align: center;
    }

    h1 {
      font-size: 1.8rem;
      color: #333;
      margin: 20px 0;
    }

    .container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
      padding: 20px;
    }

    .container > div {
      width: 100%;
      max-width: 300px;
    }

    .container a {
      text-decoration: none;
      color: #0066cc;
    }

    .container a:hover {
      color: #004d99;
    }

    video {
      width: 100%;
      max-width: 300px;
      height: auto;
      border: 2px solid #ccc;
      border-radius: 10px;
    }

    /* 響應式設計 */
    @media (max-width: 768px) {
      h1 {
        font-size: 1.5rem;
      }

      .container {
        flex-direction: column;
        align-items: center;
      }
    }

    @media (max-width: 480px) {
      h1 {
        font-size: 1.2rem;
      }

      .container > div {
        width: 90%;
      }

      .container a {
        font-size: 1.2rem;
      }

      video {
        max-width: 100%;
      }
    }
  </style>
</head>

<body>
  <h1>小遊戲</h1>
  <div class="container">
    <div>
      <h1><a href="klotski-game/version5x5/index.html">華容道</a></h1>
    </div>
    <div>
      <h1><a href="Tetris-game-v1/index.html">俄羅斯方塊</a></h1>
    </div>
    <div>
      <video controls>
        <source src="videos/UUFC2409.MP4" type="video/mp4">
      </video>
    </div>
    <div>
      <video controls>
        <source src="videos/KHCN1273.MP4" type="video/mp4">
      </video>
    </div>
  </div>
</body>

</html>
