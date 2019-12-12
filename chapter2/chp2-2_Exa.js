// 화살표 함수

// 화살표 함수(arrow function)라는 새로운 함수가 추가되었으며, 기존의 function() {}도 그대로 사용할 수 있습니다.

function add1(x, y) {
    return x + y;
}
const add2 = (x, y) => {
    return x + y;
}
const add3 = (x, y) => x + y;
const add4 = (x, y) => (x + y);
// add1, add2, add3, add4 같은 기능을 하는 함수

function not1(x) {
    return !x;
}
const not2 = x => !x;
// not1, not2 또한 같은 기능을 하는 함수


var relationship1 = {
    name: 'zero',
    friends: ['nero1', 'hero1', 'xezo1'],
    logFriends: function () {
        var that = this; // relationship1을 가리키는 this를 that에 저장
        this.friends.forEach(function (friend) {
            console.log(that.name, friend);
        });
    },
};
relationship1.logFriends();

const relationship2 = {
    name: 'zero',
    friends: ['nero2', 'hero2', 'xero2'],
    logFriends() {
        this.friends.forEach(friend => {
            console.log(this.name, friend);
        });
    },
};
relationship2.logFriends();




