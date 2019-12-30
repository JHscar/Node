// 예외 처리하기

process.on('uncaughtException', (err) => {
    console.error('예기치 못한 에러', err);
});

setInterval(() => {
    throw new Error('서버를 고장내주마!');
}, 1000);

setTimeout(() => {
    console.log('실행됩니다');
}, 2000);

// 노드 공식 문서에서는 uncaughtException 이벤트를 최후의 수단으로 사용하라고 되어있씁니다.
// 노드는 uncaughtException 이벤트 발생 후 다음 동작이 제대로 동작하는지를 보증하지 않습니다.
// 따라서 단순히 에러 내용을 기록하는 정도로 사용하고 process.exit()로 프로세스를 종료하는 것이 좋습니다.