// async/await

// async/await 문법은 프로미스를 사용한 코드를 한 번 더 깔끔하게 줄여줍니다.

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

// 상단 코드는 여전히 깁니다. async/await 문법을 사용하면 다음과 같이 바꿀 수 있습니다.

async function findAndSaveUser(Users) {
    try {
        let user = await Users.findOne({});
        user.name = 'zero';
        user = await user.save();
        user = await Users.findOne({ gender: 'm' });
        // 생략
    } catch (error) {
        console.error(error);
    }
}


// for문과 async/await을 같이 써서 Promise.all을 대체할 수도 있습니다. 이것은 노드 10버전부터 지원하는 ES2018문법입니다.

const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
(async () => {
    for await (promise of [promise1, promise2]) {
        console.log(promise);
    }
})();
