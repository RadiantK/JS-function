// function print(person){
//   console.log(person.name);
//   console.log(person.age);
// }

// const kang = {
//   name: 'kang', 
//   age: 27
// }
// print(kang);

// console.log(kang.name)
// console.log(kang['age']);

// function printValue(obj, key) {
//   // console.log(obj.key)   // 에러 obj안에 key라는 프로퍼티는 없음
//   console.log(obj[key])
// }
// printValue(kang, 'name'); // 키값은 무조건 string
// printValue(kang, 'age');

// const person1 = { name: 'bob', age: 3 }
// const person2 = { name: 'rice', age: 4 }
// const person3 = { name: 'sal', age: 5 }
// const person4 = new Person('kang', 27)
// console.log(person4)

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// console.log('name' in kang);
// console.log('age' in kang);
// console.log('random' in kang);
// console.log(kang.random);


// // for in >> for ( key in obj )
// console.clear();
// for(key in kang) {
//   console.log(key)
// }

// // for of >> (value of iterable)
// const array = [1, 2, 3, 5]
// for(value of array) {
//   console.log(value)
// }


// // cloning

// const user = { name: 'kang', age: '20'}
// const user2 = user
// console.log(user);

// const user3 = {}
// for (key in user) {
//   user3[key] = user[key]
// }
// console.clear();
// console.log(user3)

// const user4 = {};
// Object.assign(user4, user);
// console.log(user4)

// const fruit1 = {color: 'red'};
// const fruit2 = {color: 'blue', size: 'big'};
// const mixed = Object.assign({}, fruit1, fruit2);
// console.log(mixed); // 뒤에것이 덮어 씌워짐