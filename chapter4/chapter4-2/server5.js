// 쿠키와 세션 이해하기

const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

const parseCookies = (cookie = '') =>
    cookie
        .split(';')
        .map(v => v.split('='))
        .map(([k, ...va]) => [k, vs.join('=')])
        .reduce((acc, [k, v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});

const session = {};

http.createServer((req, res) => {
    const cookies = parseCookies(req.headers.cookie);
    if (req.url.startsWith('/login')) {
        const { query } = url.parse(req.url);
        const { name } = qs.parse(query);
        const expires = new Date();
        expires.setMinutes(expires.getMinutes() + 5);
        const randomInt = +new Date();
        session[randomInt] = {
            name,
            expires,
        };
        res.writeHead(302, {
            Location: '/',
            'Set-Cookie': `session=${randomInt}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
        });
        res.end();
    } else if (cookies.session && session[cookies.session].expires > new Date()) {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`${session[cookies.session].name}님 안녕하세요`);
    } else {
        fs.readFile('./server4.html', (err, data) => {
            if (err) {
                throw err;
            }
            res.end(data);
        });
    }
}).listen(8084, () => {
    console.log('8084번 포트에서 서버 대기 중입니다.');
});

// server4.js 와는 살짝 달라진 부분이 있습니다. 쿠키에 이름을 담아서 보내는 대신, randomInt라는 임의의 숫자를 보냈습니다.
// 사용자의 이름과 만료 시간은 session이라는 객체에 대신 저장합니다.
// 이제 cookie.session이 있고 만료 기한을 넘기지 않았다면 session 변수에서 사용자 정보를 가져와서 사용합니다. 다른 부분은 동일합니다.
