const fs = require('fs');

fs.writeFile('./writeme.txt', '글이 입력됩니다.', (err) => {
    if (err) {
        throw err;
    }
    fs.readFile('./writeme.txt', (err, data) => {
        if (err) {
            throw err;
        }
        console.log(data.toString());
    });
});

// writeFile() 메서드에 생성될 파일의 경로와 내용을 입력해줍니다.