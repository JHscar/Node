// __filename, __dirname

// 노드에서는 파일 사이에 모듈 관계가 있는 경우가 많아 현재 파일의 경로나 파일명을 알아야 하는 경우가 있습니다.
// 노드는 __filename, __dirname이라는 키워드로 경로에 대한 정보를 제공합니다.
// 파일에 __filename과 __dirname을 넣어두면 실행 시 현재 파일명과 파일 경로가 바뀝니다.

console.log(__filename);
console.log(__dirname);