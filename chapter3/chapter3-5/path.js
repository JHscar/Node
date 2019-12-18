// PATH

// path 모듈이 필요한 이유 중 하나는 운영체제별로 경로 구분자가 다르기 때문입니다.
// 크게 Windows 타입과 POSIX 타입으로 구분됩니다.
// POSIX는 유닉스 기반의 운영체제들로 macOS와 리눅스가 속해 있습니다.

const path = require('path');

const string = __filename;

console.log('path.sep:', path.sep);
console.log('path.delimiter:', path.delimiter);
console.log('-------------------------------');
console.log('path.dirname():', path.dirname(string));
console.log('path.extname():', path.extname(string));
console.log('path.basename():', path.basename(string));
console.log('path.parse()', path.parse(string));
console.log('path.format():', path.format({
    dir: 'C:\\user\\zerocho',
    name: 'path',
    ext: '.js',
}));
console.log('path.join():',path.join(__dirname, '..','..','/users','.','/zerocho'));