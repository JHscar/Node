// 요청과 응답 이해하기

// 서버에는 요청을 받는 부분과 응답을 보내는 부분이 있어야 합니다. 요청과 응답은 이벤트 방식이라고 생각하면 됩니다.
// 클라이언트로부터 요청이 왔을 떄 어떤 작업을 수행할지 이벤트 리스너를 미리 등록해두어야 합니다.

const http = require('http');

http.createServer((req, res) => {
    // 여기에 어떻게 응답할지 적어줍니다.
})