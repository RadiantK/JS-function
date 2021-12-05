// 'use strict';

// // 자바스크립트는 동기적이다.(정해진 순서에 맞춰 실행) synchronous
// // 언제 코드가 실행될지 예측할 수 없는것(비동기) asynchronous
// // hoisting : var , function;

// console.log('1');
// setTimeout(() => console.log('2'), 1000);
// console.log('3');

// // Synchronous Callback
// function printImmediately(print) {
//   print();
// }
// printImmediately(() => console.log('hello'));

// // ==

// // function printIm(print) {
// //   console.log(print)
// // }
// // printIm('hello')


// // Asynchronous Callback
//  function printWithDelay(print, timeout) {
//    setTimeout(print, timeout);
// }
// printWithDelay(() => console.log('async callback'), 2000);

// console.clear();

// // Callback Hell example
// class UserStorage {
//   loginUser(id, password, onSuccess, onError) {
//     setTimeout(() => {
//       if (
//         (id === 'ellie' && password === 'dream') ||
//         (id === 'coder' && password === 'academy')
//       ) {
//         onSuccess(id);
//       } else {
//         onError(new Error('not found'));
//       }
//     }, 2000);
//   }
//   getRoles(user, onSuccess, onError) {
//     setTimeout(() => {
//       if (user === 'ellie') {
//         onSuccess({name: 'ellie', role: 'admin'});
//       } else {
//         onError(new Error('no access'));
//       } 
//     }, 1000);
//   }
// }

// const userStorage = new UserStorage();
// const id = prompt('enter your id');
// const password = prompt('enter your password');
// userStorage.loginUser(id, password ,user => {
//     userStorage.getRoles(user, userWithRole => {
//         alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
//       },
//       error => {
//         console.log(error);
//       }
//     );
//   },
//   error => {
//     console.log(error);
//   }
// );

