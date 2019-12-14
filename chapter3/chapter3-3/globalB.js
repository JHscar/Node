// 노드 내장 객체 알아보기

// global 객체
// 브라우저의 window와 같은 전역 객체입니다. 전역 객체이므로 모든 파일에서 접근할 수 있습니다.

// 노드의 windwo, document 객체
// 노드에는 DOM이나 BOM이 없어 window와 document 객체를 사용할 수 없습니다. 노드에서 window 또는 document를 사용하면 에러가 발생합니다.

const A = require('./globalA');

global.message = '안녕하세요';
console.log(A());

// global 객체의 남용
// global 객체의 속성에 값을 대입하여 파일 간에 데이터를 공유할 수 있지만, 이를 남용하지는 마세요.
// 프로그램의 규모가 커질수록 어떤 파일에서 global 객체에 값을 대입했는지 찾기 힘들어 유지보수에 어려움을 겪게 되기 때문입니다.
// 다른 파일의 값을 사용하고 싶다면 모듈 형식으로 만들어서 명시적으로 값을 불러와 사용하는 것이 좋습니다.