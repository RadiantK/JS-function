// // // 함수 선언
// // function doSomething() {
// //   console.log('hello');
// // }

// // // 함수 호출
// // doSomething();

// function doSomething(add) {
//   console.log(add);
//   const result = add(2,3);
//   console.log(result);
// }

// function add(a, b) {
//   const sum = a + b;
//   return sum;
// }

// const result = add(1, 6);
// console.log(result);

// // 함수 전달
// // doSomething(add);

// const addFun = add;
// console.log(addFun);
// const result2 = addFun(1, 2);
// console.log(result2)


//-------------------------------------

// number, string, boolean, null, undefined 를 제외하면 전부 Object

// let obj = {
//   name: 'kang',
//   age: 5,
// };
// console.log(obj.name);

// let obj2 = obj;
// console.log(obj2.name);

// function add(a, b) {
//   return a + b;
// }

// function print(a, b) {
//   console.log(`${a}, ${b}`)
// }

// print(8, 4)

// const doSomething = add;
// const result = doSomething(2, 3);
// console.log(result);
// const result2 = add(4, 5);
// console.log(result2)

// function add(x, y) {
//   return x + y;
// }

// function mul(x, y) {
//   return x * y;
// }

// function surprise(operator) {
//   const result = operator(6, 7);
//   console.log(result);
// }

// surprise(mul);