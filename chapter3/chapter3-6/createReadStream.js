// readFile() 방식의 버퍼가 편리하기는 하지만 문제점도 있습니다.

// 만약 용량이 100MB인 파일이 있으면 읽을 때 메모리에 100MB의 버퍼를 만들어야 합니다.
// 이 작업을 동시에 열 개만 해도 1GB에 달하는 메모리가 사용됩니다.

// 그래서 버퍼의 크기를 작게 만들어서 여러 번에 나눠서 보내는 방식이 있습니다.

const fs = require('fs');

const readStream = fs.createReadStream('./readme3.txt', { highWaterMark: 16 });
const data = [];

readStream.on('data', (chunk) => {
    data.push(chunk);
    console.log('data :', chunk, chunk.length);
});

readStream.on('end', () => {
    console.log('end :', Buffer.concat(data).toString());
});

readStream.on('error', (err) => {
    console.log('error :', err);
})

// createReadStram()으로 읽기 스트림을 만들어줍니다.
// 첫 번째 인자로 읽을 파일을 파일 경로를 넣습니다.
// 두 번째 인자는 옵션 객체인데, highWaterMark라는 옵션이 버퍼의 크기(바이트 단위)를 정할 수 있는 옵션입니다.
