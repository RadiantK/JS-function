// function a() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('A')
//       resolve()
//     }, 1000)
//   })
// }
// function b() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('B')
//       resolve()
//     }, 1000)
//   })
// }
// function c() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('C')
//       resolve()
//     }, 1000)
//   })
// }
// function d() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('D')
//       resolve()
//     }, 1000)
//   })
// }

// // then() 체이닝으로 붙이려면 then()의 
// // 콜백 내부에서 새로운 promise가 반환이 되어야함
// // function test() {
// //   a().then(() => {
// //     return b()
// //   }).then(() => {
// //     return c()
// //   }).then(() => {
// //     return d()
// //   }).then(() => {
// //     console.log('done!')
// //   })
// // }
// // test()
// //return 제거 후 간소화

// function test() {
//   a()
//   .then(() => b())
//   .then(() => c())
//   .then(() => d())
//   .then(() => {
//     console.log('done!')
//   })
// }
// test()


//

function a(number) {
  return new Promise((resolve, reject) => {
    if(number > 4) {
      reject();
      return
    }
    setTimeout(() => {
      console.log('A');
      resolve();
    }, 1000)
  })
}

async function test() {
  // a(5)
  // .then(() => {
  //   console.log('resolve!');
  // })
  // .catch(() => {
  //   console.log('reject!');
  // }).finally(() => {
  //   console.log('done');
  // })
  try {
    await a(3)
    console.log('resolve!');
  } catch (error) {
    console.log('reject!');
  } finally {
    console.log('done');
  }
  
}
test();