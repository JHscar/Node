// 양방향 암호화

// 암호화된 문자열을 복호화할 수 있다.
// 여기에서는 키라는 것이 사용됩니다. 암호를 복호화하려면 암호화할 떄 사용한 키와 같은 키를 사용해야 한다.

const crypto = require('crypto');

const cipher = crypto.createCipher('aes-256-cbc', '열쇠');
let result = cipher.update('암호화할 문장', 'utf8', 'base64');
result += cipher.final('base64');
console.log('암호화:', result);

const decipher = crypto.createDecipher('aes-256-cbc', '열쇠');
let result2 = decipher.update(result, 'base64', 'utf8');
result2 += decipher.final('utf8');
console.log('복호화:', result2);