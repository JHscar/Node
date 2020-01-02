// 쿠키와 세션 이해하기

// 로그인을 구현하려면 쿠키와 세션에 대해 알고 있어야 합니다.

// 서버는 미리 클라이언트에 요청자를 추정할 만한 정보를 쿠키로 만들어 보내고, 그다음부터는
// 클라이언트로부터 쿠키를 받아 요청자를 파악합니다. 쿠키가 여러분이 누구인지 추적하고 있는 것입니다.
// 개인정보 유출 방지를 위해 쿠키를 주기적으로 지우라는 말이 바로 이러한 이유 때문입니다.

// 쿠키는 요청과 응답의 헤더(header)에 저장됩니다.
// 요청과 응답은 각각 헤더와 본문(body)을 가집니다.

const http = require('http');

const parseCookies = (cookie = '') => {
    cookie
        .split(';')
        .map(v => v.split('='))
        .map(([k, ...vs]) => [k, vs.join('=')])
        .reduce((acc, [k, v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});
}

http.createServer((req, res) => {
    const cookies = parseCookies(req.headers.cookie);
    console.log(req.url, cookies);
    res.writeHead(200, { 'Set-Cookie': 'mycookie=test' });
    res.end('Hello Cookie');
}).listen(8082, () => {
    console.log('8082번 포트에서 서버 대기 중입니다!');
});
