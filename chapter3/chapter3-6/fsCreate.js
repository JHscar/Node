// 기타 fs 메서드

// fs는 파일 시스템을 조작하는 다양한 메서드를 제공합니다.
// 단순히 파일 읽기/쓰기를 했지만, 파일을 생성하고 삭제할 수도 있고, 폴더를 생성하고 삭제할 수도 있습니다.

const fs = require('fs');

fs.access('./folder', fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK, (err) => {
    if (err) {
        if (err.code === 'ENOENT') {
            console.log('폴더 없음');
            fs.mkdir('./folder', (err) => {
                if (err) {
                    throw err;
                }
                console.log('폴더 만들기 성공');
                fs.open('./folder/file.js', 'w', (err, fd) => {
                    if (err) {
                        throw err;
                    }
                    console.log('빈 파일 만들기 성공', fd);
                    fs.rename('./folder/file.js', './folder/newfile.js', (err) => {
                        if(err){
                            throw err;
                        }
                        console.log('이름 바꾸기 성공');
                    });
                });
            });
        };
    } else {
        console.log('이미 폴더 있음');
    }
});