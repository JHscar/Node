// 비구조화 할당

// 이름은 어색하지만 매우 유용한 기능, 객체와 배열로부터 속성이나 요소를 쉽게 꺼낼 수 있습니다.

var candyMachine = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy: function () {
        this.status.count--;
        return this.status.count;
    }
};
var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;

// 객체의 속성을 같은 이름의 변수에 대입하는 코드입니다. 이를 다음과 같이 바꿀 수 있습니다.

const candyMachine = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy() {
        this.status.count--;
        return this.status.count;
    }
};
count { getCandy, status: { count } } = candyMachine;

// 배열도 비구조화할 수 있습니다.

var array = ['nodejs', {}, 10, true];
var node = array[0];
var obj = array[1];
var bool = array[3];

// array란 배열의 첫 번째, 두 번째 요소와 마지막 요소를 변수에 대입하는 코드입니다. 다음과 같이 바꿀 수 있습니다.

const array = ['nodejs', {}, 10, true];
const [node, obj, , bool] = array;