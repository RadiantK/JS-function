// // Callback Hell example
// class UserStorage {
//   loginUser(id, password) {
//     return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       if (
//         (id === 'kang' && password === 'asdf') ||
//         (id === 'coder' && password === 'academy')
//       ) {
//         resolve(id);
//       } else {
//         reject(new Error('not found'));
//       };
//     }, 2000);
//   });
//  };

//   getRoles(user) {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (user === 'kang') {
//         resolve({name: 'kang', role: 'admin'});
//       } else {
//         reject(new Error('no access'));
//       } 
//     }, 1000);
//    });
//   };
// };

// const userStorage = new UserStorage();
// const id = prompt('enter your id');
// const password = prompt('enter your password');
// userStorage.loginUser(id, password)
// .then(userStorage.getRoles)
// .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`));


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
// )






// // 연습

// class UserStorage {
//   loginUser(id, password) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if(
//           (id === 'kang' && password === 'asdf') ||
//           (id === 'kook' && password === 'asdf')) {
//            resolve(id) 
//           } else {
//             reject(new Error('ERROR!!'))
//           }
//       }, 2000)
//     })
//   }
//   getRoles(user) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (user === 'kang') {
//           resolve({name: 'kang', role: 'admin'})
//         } else {
//           reject(new Error('no access'))
//         }
//       }, 1000)
//     })
   
//   }
// }

// const userStorage = new UserStorage();
// const id = prompt('login your id')
// const password = prompt('login your password')
// userStorage.loginUser(id, password)
// .then(userStorage.getRoles)
// .then(user => alert(`Hi ${user.name} you role: ${user.role}`))
// .catch(error => console.log(error))


// async await 사용해보기

// class UserStorage {
//   loginUser(id, password) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if(
//           (id === 'kang' && password === 'asdf') ||
//           (id === 'kook' && password === 'asdf')) {
//            resolve(id) 
//           } else {
//             reject(new Error('ERROR!!'))
//           }
//       }, 2000)
//     })
//   }
//   getRoles(user) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (user === 'kang') {
//           resolve({name: 'kang', role: 'admin'})
//         } else {
//           reject(new Error('no access'))
//         }
//       }, 1000)
//     })
   
//   }
// }

// const userStorage = new UserStorage();
// const id = prompt('login your id')
// const password = prompt('login your password')
// async function order() {
//   try {
//   const result = await userStorage.loginUser(id, password);
//   const user = await userStorage.getRoles(result);
//   return `Hi ${user.name}, your role: ${user.role}`;
//   } catch(err) {
//     return err
//   }
// }
// order().then(console.log)


// ================================

// class UserStorage {
//   loginUser(id, password) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if(
//           (id === 'kang' && password === 'asdf') ||
//           (id === 'kook' && password === 'asdf')) {
//            resolve(id) 
//           } else {
//             reject(new Error('ERROR!!'))
//           }
//       }, 2000)
//     })
//   }
//   getRoles(user) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (user === 'kang') {
//           resolve({name: 'kang', role: 'admin'})
//         } else {
//           reject(new Error('no access'))
//         }
//       }, 1000)
//     })
   
//   }
// }

// const userStorage = new UserStorage();
// const id = prompt('login your id')
// const password = prompt('login your password')
// async function order() {
//   try {
//   const result1 = await userStorage.loginUser(id, password);
//   const user = await userStorage.getRoles(result1)
//   return `Hello ${user.name} your Roles ${user.role}.`
//   } catch(err) {
//     console.log(err)
//   }
// }

// order().then(console.log)