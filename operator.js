// //  string concatenation 연속되는 문자열
// console.log('my' + ' cat')
// console.log('1' + 2);
// console.log(`string literals: 1 + 2 = ${1 + 2}`);
// console.log("kang\'s \nbook");

// // Increment and decrement operator 증가 감소

// let counter = 2;
// const preIncrement = ++counter
// // counter = counter + 1
// // preIncrement = counter
// console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

// const postIncrement = counter++;
// // postIncrement = counter
// // counter = counter + 1
// console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);


// Logical operators: && , || , !

// const value1 = false;
// const value2 = 4 < 2;

// console.log(`or: ${value1 || value2 || check()}`)

// console.log(`and: ${value1 && value2 && check()}`)


// function check() {
//   for(let i = 0; i < 10; i++) {
//     console.log('');
//   }
//   return true;
// }


// console.log(name === 'kang' ? 'yes' :  'no');

// const browser = 'min';
// switch (browser) {
//   case 'kang' :
//     console.log("hi kang");
//     break;
//   case 'min' :
//     console.log("hi min");
//     break;
//   case 'kook' :
//     console.log("hi kook");
//     break;
//   default:
//     console.log('same all!');
//   break;
// }



// let i = 3;
// while (i>0) {
//   console.log(`while: ${i}`)
//   i--
// }

// do {
//   console.log(`while: ${i}`)
//   i--
// } while (i > 0) 


// for (let i = 0; i < 10; i++) {
//   if (i % 2 !== 0 ){
//     continue
//   }
//   console.log(`i: ${i}`)
// }

// for (let i = 0; i < 11; i++) {
//   if (i > 8){
//     break;
//   }
//   console.log(`i: ${i}`)
// }