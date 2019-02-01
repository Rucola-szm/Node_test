// httpモジュールの読み込み
const http = require("http");

// File Systemを扱うfsモジュールを読み込み
const fs = require("fs");

// index.htmlを読み込む
const index = fs.readFileSync("index.html");

// ホスト名とポートの定義
const hostname = "127.0.0.1";
const port = 3000;

//　リクエストに対してのレスポンスを定義
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(index);
});

// サーバを起動。起動時にコンソールにメッセージを表示
server.listen(port, hostname, () => {
    console.log(`Server runnning at http://${hostname}:${port}/`);
});