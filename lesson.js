// callback - это ф-ия, которая передана в качестве параметра в др ф-ию

// const promise = new Promise(() => {
// })
//
// setTimeout(() => {
// }, 3000)
//
// const FIRST_TODO_URL = 'https://jsonplaceholder.typicode.com/todos/1'
// const getTodo = (callback) => {
//     fetch(FIRST_TODO_URL)
//         .then((response) => response.json())
//         .then((todo) => {
//             callback(todo)
//         })
//         .catch((error) => {
//             console.log('error', error)
//         })
// }
// getTodo((todoItem) => {
//     console.log('todoItem', todoItem)
// })

// event loop - это событийный цикл или бесконечный цикл,
// в котором JS ожидает задачи, выполняет их и после ждет еще новых задач

// function sayHello(name) {
//     console.log(`Hello, ${name}`)
// }

// console.log('start')
// sayHello('Maxim')
// setTimeout(() => {
//     sayHello('Charlie')
// }, 0)
// sayHello('Antony')
// console.log('end')

//микро задачи (then, catch, finally)

console.log('Давайте начинать')
setTimeout(() => {
    console.log('Привет! Я в setTimeout')
}, 1000)
const promise = new Promise((resolve) => {
    console.log('Я в промисе')
    resolve('Возвращаю результат из промиса')
})
setTimeout(() => {
    console.log('Я тоже в setTimeout, только жду дольше')
}, 2000)
promise.then((result) => {
    console.log(result)
})

console.log('Давайте заканчивать')


// console :
// Давайте начинать
// Я в промисе
// Давайте заканчивать
// Возвращаю результат из промиса
// Привет! Я в setTimeout
// Я тоже в setTimeout, только жду дольше

// 1. выполняется мАкрозадача - с 1 строчки до последней
// 2. вызывать все, что есть в очереди мИкрозадач
// 3. вызывается все, что есть в очереди вызовов
