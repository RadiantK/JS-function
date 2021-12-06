// // // JSON (JavaScript Object Notation)


// // 1. Object to JSON
// // stringify(obj)
// let json = JSON.stringify(true);
// console.log(json);

// json = JSON.stringify(['apple', 'banana']);
// console.log(json);

// const rabbit = {
//   name: 'tori',
//   color: 'white',
//   size: null,
//   birthDate: new Date(),
//   jump: () => {
//     console.log(`${this.name} can jump`);
//   }
// };

// json = JSON.stringify(rabbit); // 함수는 오브젝트에 있는 데이터가 아니기 때문에 제외
// console.log(json);


// // json = JSON.stringify(rabbit, ['name', 'color', 'size']); // 원하는 property만 고를 수 있음
// // console.log(json);

// json = JSON.stringify(rabbit, ['name', 'color'])
// console.log(json);

// // json = JSON.stringify(rabbit, (key, value) => { // 콜백함수로 조금 더 세밀하게 통제.
// //   console.log(`key: ${key}, value: ${value}`)
// //   // return value;
// //   return key === 'name' ? 'kang' : value;
// //   // key가 'name'이 들어오면 무조건 'kang'으로 설정하고 키가 'name'이 아닌경우 그냥 value 사용
// // }); 
// // console.log(json);

// json = JSON.stringify(rabbit, (key, value) => {
//   console.log(`key: ${key}, value: ${value}`)
//   return key === 'name' ? 'kang' : value ;
// })
// console.log(json);

// json = JSON.stringify(rabbit, (key, value) => {
//   console.log(`key: ${key}, value: ${value}`)
//   return key === 'name' ? 'kang' : value;
// })
// console.log(json);

// // //2. JSON to Object
// // // parse(json)

// console.clear();
// json = JSON.stringify(rabbit);
// console.log(json);

// // const obj = JSON.parse(json);
// // console.log(obj);

// rabbit.jump();
// // obj.jump();

// console.log(rabbit.birthDate.getDate())

// console.log(obj.birthDate)

// const obj =JSON.parse(json, (key, value) => {
//   console.log(`key: ${key}, value: ${value}`)
//   return key === 'birthDate' ? new Date() : value;
// })
// console.log(obj.birthDate.getDate());




// const obj = JSON.parse(json, (key, value) => {
//   console.log (`key: ${key}, value: ${value}`)
//   return key === 'birthDate' ? new Date(value) : value ;
// });
// console.log(obj);
// console.log(obj.birthDate.getDate());

// const obj = JSON.parse(json, (key, value) => {
//   console.log(`key: ${key}, value: ${value}`)
//   return key === 'birthDate' ? new Date(value) : value;
//   // key가 'birthDate'가 들어오면 new Date(value)를 새로 생성하고 아닌경우 그냥 value값 사용
// });
// console.log(obj);
// rabbit.jump();
// // obj.jump();
// //함수는 직렬화할 때 포함되지 못했기 때문에 다시 제이슨으로부터 Object를 만든것은 함수를 포함 못함

// console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate());