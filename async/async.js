// // async & await
// // clear style of using promise

// 1. async 비동기 : 함수 앞에 쓰면 함수가 promise로 변함
// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     // 사용자의 데이터를 백엔드에서 받아오는 함수(가정) 네트워크 통신 요청 10초 걸림
//     // return 'ellie' // pending
//     resolve('ellie')
//   })
// }

// const user = fetchUser();
// user.then(console.log)
// console.log(user);

// // async 사용
// async function fetchUser() {
//     return 'ellie';
// }

// const user = fetchUser();
// user.then(console.log)
// console.log(user);

// // // 2. await
// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms))
// }

// async function getApple() {
//   await delay(2000);
//   return 'apple';
// }

// async function getBanana() {
//   await delay(1000);
//   return 'banana';
// }

// function pickFruits() {
//   return getApple()
//   .then(apple => {
//     return getBanana()
//     .then(banana => `apple: ${apple}, banana: ${banana}`)
//   })
// }
// pickFruits().then(console.log)

// // async
// async function pickFruits() {
//   const apple = await getApple();
//   const banana = await getBanana();
//   return `${apple} + ${banana}`
// }

// pickFruits().then(console.log);

// // Promise 중첩: 콜백지옥
// function pickFruits() {
//   return getApple()
//   .then(apple => {
//     return getBanana ()
//     .then(banana => `${apple} + ${banana}`);
//   })
// }

// // pickFruits().then(console.log);

// // 병렬적으로 실행 딜레이 중첩없이 1.5+1.5 3초지만  1.5초 걸림 (병렬적으로)
// // 근데 너무 지저분해져서 잘 사용 x
// async function pickFruits() {
//   const applePromise = getApple();
//   const bananaPromise = getBanana();
//   const apple = await applePromise;
//   const banana = await bananaPromise;
//   return `${apple} + ${banana}`
// }

// pickFruits().then(console.log);


// // 3. useful Promise APIs
// Promise.all: promise 배열을 전달하게 되면 모든 promise가 다 받을때까지 모아줌
// function pickAllFruits() {
//   return Promise.all([getApple(), getBanana()])
//   .then(fruits => fruits.join(' + '));
// }
// pickAllFruits().then(console.log);

// // race 배열에 전달된 promise중에서 가장먼저 리턴하는 값만 전달
// function pickOnlyone() {
//   return Promise.race([getApple(), getBanana()])
// }
// pickOnlyone().then(console.log);