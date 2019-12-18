// crypto

// 다양한 방식의 암호화를 도와주는 모듈입니다.

// 단방향 암호화
// 비밀번호는 보통 단방향 암호화 알고리즘을 사용해서 암호화합니다.
// 단방향 암호화란 복호화할 수 없는 암호화 방식을 뜻합니다.

// 단방향 암호화 알고리즘은 주로 해시 기법을 사용합니다.

// 해시 기법이란 어떠한 문자열을 고정된 길이의 다른 문자열로 바꿔버리는 방식입니다.

const crypto = require('crypto');

console.log('base64:',crypto.createHash('sha512').update('비밀번호').digest('base64'));
console.log('hex:',crypto.createHash('sha512').update('비밀번호').digest('hex'));
console.log('base64:',crypto.createHash('sha512').update('다른 비밀번호').digest('base64'));

// createHash(알고리즘) : 사용할 해시 알고리즘을 넣어줍니다.
// 
// md5, sha1, sha256, sha512 등이 가능하지만, md5와 sha1은 이미 취약점이 발견되었습니다.
// 현재는 sha512 정도로 충분하지만, 나중에 sha512마저도 취약해지면 더 강화된 알고리즘으로 바꿔야 합니다. ==>> sha3 알고리즘 사용

// update(문자열) : 변환할 문자열을 넣어줍니다.

// digest(인코딩) : 인코딩할 알고리즘을 넣어줍니다.
//
// base64, hex, latin1이 주로 사용되는데, 그중 base64가 결과 문자열이 가장 짧아 애용됩니다. 결과물로 변환된 문자열을 반환합니다.