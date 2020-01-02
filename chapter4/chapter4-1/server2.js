// 웹 서버

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('./server2.html', (err, data) => {
        if (err) {
            throw err;
        }
        res.end(data);
    });
}).listen(8081, () => {
    console.log('8081번 포트에서 서버 대기 중입니다!');
});

// 요청이 들어오면 먼저 fs 모듈로 HTML파일을 읽습니다.
// data 변수에 저장된 버퍼를 그대로 클라이언트에 보내주면 됩니다.