// OS

// 노드의 모듈들은 노드 버전마다 차이가 있습니다.
// os모듈은 웹 브라우저에 사용되는 자바스크립트는 운영체제의 정보를 가져올 수 없지만, 노드는 os 모듈에 정보가 담겨 있어 정보를 가져올 수 있습니다.


const os = require('os');

console.log('운영체제 정보----------');
console.log('os.arch():', os.arch());
console.log('os.platform():', os.platform());
console.log('os.type():', os.type());
console.log('os.uptime():', os.uptime());
console.log('os.hostname():', os.hostname());
console.log('os.release():', os.release());

console.log('경로----------');
console.log('os.homedir():', os.homedir());
console.log('os.tmpdir():', os.tmpdir());

console.log('cpu 정보----------');
console.log('os.cpus():', os.cpus());
console.log('os.cpus().length:', os.cpus().length);

console.log('메모리 정보----------');
console.log('os.freemem():', os.freemem());
console.log('os.totalmem():', os.totalmem());