// 모듈로 만들기

// 노드는 코드를 모듈로 만들 수 있다는 점에서 브라우저의 자바스크립트와는 다릅니다.
// 모듈이란 특정한 기능을 하는 함수나 변수들의 집합!!!!!
// 보통 파일 하나가 모듈 하나가 됩니다.

const { odd, even } = require('./chp3-2-1_Exa');
const checkNumber = require('./chp3-2-2_Exa');

function checkStringOddOrEven(str) {
    if (str.length % 2) { // 홀수면
        return odd;
    }
    return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));