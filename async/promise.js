// 'use strict';

// // Promise: 자바스크립트 안에 내장돼 있는 Object 
// // State: pending미정 -> fulfilled완료 or rejected실패
// // Producer vs Consumer

// // 1. Producer
// // 새로운 Promise가 만들어 질때는 우리가 전달한 executor가 자동적으로 바로 실행됨
// const promise = new Promise((resolve, reject) => {
//   // 조금 무거운 일들을 수행 ()
//   console.log('doing something...');
//   setTimeout(() => {
//     resolve('kang');
//     // reject(new Error('no network'))
//   }, 2000);
// });

// // 2.Consumer: then, catch, finally
// // then: promise가 정상적으로 수행돼 최종적으로 resolve라는 콜백함수가 전달한 값이 value에 전달
// promise 
// .then((value) => {
//   console.log(value);
// })
// .catch(error => {
//   console.log(error)
// })
// .finally(() => {
//   console.log('finally')
// });

// // 3. Promise chaining
// const fetchNumber = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000);
// });

// fetchNumber
// .then(num => num * 2)
// .then(num => num * 3)
// .then(num => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(num-1), 1000)
//   });
// })
// .then(num => console.log(num));

// // 4.에러 다루기

// // 에러가 없을때
// const getHen = () => 
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve('chiken'), 1000)
//   });
// const getEgg = (hen) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`${hen} => egg`), 1000)
//   });
// const cook = (egg) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`${egg} => fry`), 1000)
//   });

// getHen()
//   .then(hen => getEgg(hen))
//   .then(egg => cook(egg))
//   .then(meal => console.log(meal))

// // 에러가 있을 때
// const getHen = () => 
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve('chiken'), 1000)
//   });
// const getEgg = hen =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => reject(`error! ${hen} => egg`), 1000)
//   });
// const cook = egg =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`${egg} => fry`), 1000)
//   });

// getHen()
//   .then(hen => getEgg(hen))
//   .catch(error => {
//     return 'bread';
//   })
//   .then(egg => cook(egg))
//   .then(meal => console.log(meal))
//   .catch(console.log); 