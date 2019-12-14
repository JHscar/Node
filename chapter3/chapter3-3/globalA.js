// 노드 내장 객체 알아보기

// global 객체
// 브라우저의 window와 같은 전역 객체입니다. 전역 객체이므로 모든 파일에서 접근할 수 있습니다.

// 노드의 windwo, document 객체
// 노드에는 DOM이나 BOM이 없어 window와 document 객체를 사용할 수 없습니다. 노드에서 window 또는 document를 사용하면 에러가 발생합니다.

module.exports = () => global.message;