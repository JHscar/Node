// REPL 사용하기

// 자바스크립는 스크립트 언어이므로 미리 컴파일을 하지 않아도 즉석에서 코드를 실행할 수 있습니다.
// 노드도 비슷한 콘솔을 제공하는데, 입력한 코드를 읽고(Read),해석하고(Eval),결과물을 반환하고(Print),종료할 때까지 반복(Loop)
// 한다고 해서 REPL(Read Eval Print Loop)이라고 부른다.

function helloWorld() {
    console.log('Hello World');
    helloNode();
}

function helloNode() {
    console.log('Hello Node');
}

helloWorld();
