// 예외 처리하기

// 노드 자체에서 잡아주는 에러에 대해 알아보겠습니다.

const fs = require('fs');

setInterval(() => {
    fs.unlink('./abcdefg.js', (err) => {
        if (err) {
            console.error(err);
        }
    });
}, 1000);