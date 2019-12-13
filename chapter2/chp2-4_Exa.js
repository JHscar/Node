// 프로미스

// 자바스크립트와 노드에서는 주로 비동기 프로그래밍을 합니다.
// 특히 이벤트 주도 방식 때문에 콜백 함수를 자주 사용합니다.
// ES2015부터는 자바스크립트와 노드의 API들이 콜백 대신 프로미스 기반으로 재구성됩니다.
// 그래서 악명 높은 콜백 헬을 극복했다는 평가를 받고 있습니다.

const condition = true; // true면 resolve, false면 reject
const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('성공');
    } else {
        reject('실패');
    }
});

promise
    .then((message) => {
        console.log(message); // 성공(resolve)한 경우 실행
    })
    .catch((error) => {
        console.log(error); // 실패(reject)한 경우 실행
    })


// 콜백을 프로미스로 바꾸는 예제

function findAndSaveUser(Users) {
    Users.findOne({}, (err, user) => { // 첫 번째 콜백
        if (err) {
            return console.error(err);
        }
        user.name = 'zero';
        user.save((err) => { // 두 번째 콜백
            if (err) {
                return console.error(err);
            }
            Users.findOne({ gender: 'm' }, (err, user) => { // 세 번째 콜백
                // 생략
            });
        });
    });
}

// 콜백 함수가 나올 때마다 코드의 깊이가 깊어집니다. 각 콜백 함수마다 에러도 따로 처리해줘야 합니다. 이 코드를 다음과 같이 바꿀 수 있습니다.

function findAndSaveUser(Users) {
    Users.findOne({})
        .then((user) => {
            user.name = 'zero';
            return user.save();
        })
        .then((user) => {
            return Users.findOne({ gender: 'm' });
        })
        .then((user) => {
            // 생략
        })
        .catch(err => {
            console.error(err);
        });
}


// 프로미스 여러 개를 한번에 실행할 수 있는 방법이 있습니다.

const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
Promise.all([promise1, promise2])
    .then((result) => {
        console.log(result); // ['성공1', '성공2']
    })
    .catch((error) => {
        console.error(error);
    });






