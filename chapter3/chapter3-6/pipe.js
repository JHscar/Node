// createReadStream으로 파일을 읽고 그 스트림을 전달받아 createWriteStream으로 파일을 쓸 수도 있습니다.
// 파일 복사와 비슷합니다. 스트림끼리 연결하는 것을 '파이핑한다'고 표현합니다.
// 액체가 흐르는 관(파이프, pipe)처럼 데이터가 흐른다고 해서 지어진 이름입니다.

const fs = require('fs');

const readStream = fs.createReadStream('readme4.txt');
const writeStream = fs.createWriteStream('writeme3.txt');
readStream.pipe(writeStream);