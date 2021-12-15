// callback 함수 : 함수의 인수로 사용되는 또다른 함수

// callback 지옥
// function a(callback) {
//   setTimeout(()=> {
//     console.log('A');
//     callback()
//   }, 1000) 
// }
// function b(callback) {
//   setTimeout(()=> {
//     console.log('B');
//     callback()
//   }, 1000) 
// }
// function c(callback) {
//   setTimeout(()=> {
//     console.log('C');
//     callback()
//   }, 1000) 
// }
// function d(callback) {
//   setTimeout(()=> {
//     console.log('D');
//     callback()
//   }, 1000) 
// }
// a(function () {
//   b(function () {
//     c(function () {
//       d(function () {
//         console.log('done!')
//       })
//     })
//   })
// })


//


// promise
// function a() {
//   // promise: 약속의 객체
//   return new Promise(function (reslove) {
//     setTimeout(function() {
//       console.log('A')
//       reslove('Hello A')
//     }, 1000)
//   })
// }
// function b() {
//   // promise: 약속의 객체
//   return new Promise(function (reslove) {
//     setTimeout(function() {
//       console.log('B')
//       reslove('Hello B')
//     }, 1000)
//   })
// }
// function c() {
//   // promise: 약속의 객체
//   return new Promise(function (reslove) {
//     setTimeout(function() {
//       console.log('C')
//       reslove('Hello C')
//     }, 1000)
//   })
// }
// function d() {
//   // promise: 약속의 객체
//   return new Promise(function (reslove) {
//     setTimeout(function() {
//       console.log('D')
//       reslove('Hello D')
//     }, 1000)
//   })
// }

// async function test() {
//   const a1 = await a()
//   const b2 = await b()
//   const c3 = await c()
//   const d4 = await d()
//   console.log('done');
//   console.log(a1, b2, c3, d4);
// }
// test();