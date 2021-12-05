// function log(message) {
//   return (message)
// }
// log('Hello');
// log(1234);

// function changeName(obj) {
//   obj.name = 'coder';
// }
// const kang = {
//   name: 'kang'
// }
// changeName(kang)
// return (kang)

// function showMessage(message, from= "unknown") {
//   return (`${message} by ${from}`)
// }
// showMessage('안녕하세요', ) ;

// function printAll(...args) {
//   for(let i = 0; i < args.length; i++) {
//     return (args[i])
//   }
// }
// printAll('dream', 'coding', 'kang')

// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다. local scope

// const globalMessage = 'global';
// function printMessage(){
//   const message = 'hello'
//   return (message);
//   return (globalMessage);
//   function printAnother() {
//     return (message)
//     const childMessage = 'hello';
//   }
// } 
// printMessage();

// function randomQuiz(answer, printYes, printNo) {
//   if (answer === 'love you') {
//     printYes();
//   } else {
//     printNo();
//   }
// }
// const printYes = function () {
//   return ('yes!');
// }
// const printNo = function () {
//   return ('no!')
// }
// randomQuiz('wroong', printYes, printNo);
// randomQuiz('love you', printYes, printNo);


// function calculate(command, a, b) {
//   if (command === 'add'){
//     return a + b;
//   } else if (command === 'sub') {
//     return a - b;
//   } else if (command === 'div') {
//     return a / b;
//   } else if (command === 'mul') {
//     return a * b;
//   } else if (command === 'rem'){
//     return a % b;
//   } else {
//     undefined
//   }
// }
// console.log(calculate('aaew', 10, 4));


// function calculate(command, a, b) {
//   switch (command) {
//     case 'add':
//       return a + b;
//     case 'sub':
//       return a - b;
//     case 'mul':
//       return a * b;
//     case 'div':
//       return a / b;
//     case 'rem':
//       return a % b;
//     default:
//       throw Error('unknown command')
//   }
// }
// console.log(calculate('mul', 10, 4))