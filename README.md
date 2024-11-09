<html lang="zh-Hant">

<head>
  <meta charset="UTF-8">
  <meta name="google-adsense-account" content="ca-pub-2700712381606881">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- 響應式設計所需的 viewport 設置 -->
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
    }

    table {
      width: 100%;
      margin: 20px 0;
      border-collapse: collapse;
    }

    td {
      padding: 10px;
      text-align: center;
    }

    a {
      display: block;
      margin-bottom: 10px;
      font-size: 18px;
      text-decoration: none;
      color: #007BFF;
    }

    /* 響應式設計：影片尺寸 */
    video {
      max-width: 100%;
      height: auto;
    }

    /* 媒體查詢 - 對於較小的螢幕 (如手機) */
    @media (max-width: 600px) {
      table {
        width: 100%;
      }

      td {
        display: block;
        margin-bottom: 20px;
      }

      a {
        font-size: 16px;
      }
    }
  </style>
</head>

<body>
  <h1>小遊戲</h1>
  <table>
    <tr>
      <td><a href="klotski-game/version5x5/index.html">華容道</a></td>
      <td>
        <video controls>
          <source src="videos/KHCN1273.MP4" type="video/mp4">
        </video>
      </td>
    </tr>
    <tr>
      <td><a href="Tetris-game-v1/index.html">俄羅斯方塊</a></td>
      <td>
        <video controls>
          <source src="videos/UUFC2409.MP4" type="video/mp4">
        </video>
      </td>
    </tr>
  </table>
</body>

</html>
