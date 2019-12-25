// 버퍼와 스트림

// 파일을 읽거나 쓰는 방식에는 크게 두 가지 방식, 즉 버퍼를 이용하는 방식과 스트림을 이용하는 방식이 있습니다.

// 버퍼링
// 영상을 재생할 수 있을 때까지 데이터를 모으는 동작

// 스트리밍
// 방송인의 컴퓨터에서 시청자의 컴퓨터로 영상 데이터를 조금씩 전송하는 동작

const buffer = Buffer.from('저를 버퍼로 바꿔보세요');
console.log('from()', buffer);
console.log('length:', buffer.length);
console.log('toString():', buffer.toString());

const array = [Buffer.from('띄엄'), Buffer.from('띄엄'), Buffer.from('띄어쓰기')];
const buffer2 = Buffer.concat(array);
console.log('concat()', buffer2.toString());

const buffer3 = Buffer.alloc(5);
console.log('alloc()', buffer3);