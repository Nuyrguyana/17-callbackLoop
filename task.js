// task1

setTimeout(() => {
    console.log('setTimeout');
}, 0);

const promise = new Promise((resolve) => {
    console.log('Promise');
    resolve();
});

promise.then(() => {
    console.log('Promise resolve');
});

console.log('End');

// Promise
// End
// Promise resolve
// setTimeout

// task2

function runCode() {
    console.log('before promise')
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Zero Promise')

            resolve()
        }, 0)
    })
}

setTimeout(() => {
    console.log('Zero')
}, 0)

runCode().then(() => console.log('Zero Promise Invoked'))

console.log('One')

// before promise
// One
// Zero Promise
// Zero Promise Invoked
// Zero

//tak3

const getData = (callback) => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((response) => response.json())
        .then((user) => {
            console.log('Success');
            callback(user);
        })
        .catch((error) => {
            console.log(error);
        });
}

getData(() => {
    console.log('user received');

    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve('promise resolved');
        }, 500);

        console.log('in promise');
        setTimeout(() => {
            console.log('last set timeout');
        }, 400);

    });

    promise.then((result) => {
        console.log(result);
    })
});

console.log('End')

// End
// Success
// user received
// in promise
// promise resolved
// last set timeout