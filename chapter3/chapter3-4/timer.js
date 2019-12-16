// 타이머

// 타이머 기능을 제공하는 함수인 setTimeout, setInterval, setImmediate 는 노드에서 window 대신 global 객체 안에 들어 있습니다.
// setTimeout 과 setInterval 은 웹 브라우저에서도 자주 사용되므로 익숙할 겁니다.

// setTimeout (콜백 함수, 밀리초) : 주어진 밀리초 (1000분의1초) 이후에 콜백 함수를 실행합니다.
// setInterval (콜백 함수, 밀리초) : 주어진 밀리초마다 콜백 함수를 반복 실행합니다.
// setImmediate (콜백 함수) : 콜백 함수를 즉시 실행합니다.

// 이 타이머 함수들은 모두 아이디를 반환합니다. 아이디를 사용하여 타이머를 취소할 수 있습니다.

// clearTimeout(아이디) : setTimeout을 취소합니다.
// clearInterval(아이디) : setInterval을 취소합니다.
// clearImmediate(아이디) : setImmediate를 취소합니다.

const timeout = setTimeout(() => {
    console.log('1.5초 후 실행');
}, 1500);

const interval = setInterval(() => {
    console.log('1초마다 실행');
}, 1000);

const timeout2 = setTimeout(() => {
    console.log('실행되지 않습니다');
}, 3000);

setTimeout(() => {
    clearTimeout(timeout2);
    clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => {
    console.log('즉시 실행');
});

const immediate2 = setImmediate(() => {
    console.log('실행되지 않습니다.');
});

clearImmediate(immediate2);


// setImmediate(콜백) 과 setTimeout(콜백,0)에 담긴 콜백 함수는 이벤트 루프를 거친 뒤 즉시 실행됩니다.
// 특수한 경우에 setImmediate는 setTimeout(콜백, 0)보다 먼저 실행됩니다.
// 파일 시스템 접근, 네트워킹 같은 I/O 작업의 콜백 함수 안에서 타이머를 호출하는 경우입니다.
// 하지만 setImmediate가 항상 setTimeout(콜백, 0)보다 먼저 호출되는 것은 아니다.
// 헷갈리지 않도록 setTimeout(콜백, 0)은 사용하지 않는 것을 권장.