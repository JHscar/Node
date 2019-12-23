// 파일 시스템 접근하기

// fs 모듈은 파일 시스템에 접근하는 모듈입니다.
// 즉, 파일을 생성하거나 삭제하고, 읽거나 쓸 수 있습니다. 폴더도 만들었다 지웠따 할 수 있습니다.
// 웹 브라우저에서 자바스크립트를 사용할 때는 파일 다운로드와 파일 시스템 접근이 금지되어 있으므로 노드의 fs 모듈이 낯설 것입니다.

const fs = require('fs');

fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
    console.log(data.toString());
});

// 콘솔에 Buffer라는 이상한 것이 출력된다.
// 단순히 버퍼를 메모리의 데이터라고 생각하면 된다.