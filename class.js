// class Person {
//   constructor(name, age){
//     this.name = name;
//     this.age = age;
//   }
//   speak() {
//     console.log(`${this.name}: Hello!`)
//   }
// }
// const kang = new Person('kang', 27)
// console.log(kang.name);
// console.log(kang.age);
// kang.speak();

// getter setter

// class User {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
//   get age() {
//     return this._age;
//   }
//   set age(value) {
//     this._age = value < 0 ? 0 : value;
//   }
// }

// const user1 = new User('kang','minKook', -1);
// console.log(user1.age);


//상속 다양성 

//  class Shape {
//    constructor(width, height, color) {
//      this.width = width;
//      this.height = height;
//      this.color = color;
//    }

//    draw() {
//      console.log(`drawing ${this.color} color !`);
//    }
   
//    getArea() {
//      return width * this.height;
//    }
//  }
//  class Rectangle extends Shape {};
//  class Triangle extends Shape {
//    draw() {
//       super.draw();
//      console.log('▲');
//    }
//    getArea() {
//      return (this.width * this.height) / 2;
//    }
//  };
 
 
//  const rectangle = new Rectangle(20, 20, 'blue');
//  rectangle.draw();
//  const triangle= new Triangle(20, 20, 'red');
//  triangle.draw();
//  console.log(triangle.getArea());