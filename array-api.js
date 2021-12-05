// // 주어진 배열을 문자열로 변환하기
// {
//   const fruits = ['apple', 'banana', 'orange'];
//   const result = fruits.join();
//   console.log(result);
//   console.log(fruits);
// }

// // 주어진 문자열을 배열로 변환하기
// {
//   const fruits = 'apple, kiwi, banana, cherry';
//   const result = fruits.split(',');
//   console.log(result);
//   console.log(fruits);
// }

// // 주어진 배열을 거꾸로 만들기
// // 배열 자체를 변화시키고 리턴값도 변화함.
// {
//   const array = [1, 2, 3, 4, 5];
//   const result = array.reverse();
//   console.log(result);
//   console.log(array);
// }

// // 배열의 0,1 인덱스를 제외한 새로운 배열을 만들기
// {
//   const array = [1, 2, 3, 4, 5];
//   const result = array.slice(2, 5);
//   console.log(result);
//   console.log(array);
// }

// {
//     class Student {
//     constructor(name, age, enrolled, score) {
//       this.name = name;
//       this.age = age;
//       this.enrolled = enrolled;
//       this.score = score;
//     }
//   }
//   const students = [
//     new Student('A', 29, true, 45),
//     new Student('B', 28, false, 80),
//     new Student('C', 30, true, 90),
//     new Student('D', 40, false, 66),
//     new Student('E', 18, true, 88),
//   ]
  
  // 점수가 90점인 학생 찾기
  // {
  //   const result = students.find((student) =>
  //   student.score === 90
  //   )
  //   console.log(result);
  // }

  // 수업에 등록한 학생들만 골라내서 배열로 만들기
  // {
  //   const result = students.filter((student) =>
  //      student.enrolled === true
  //   );
  //   console.log(result);
  // }

  // students 에서 점수만 뽑아서 새로운 배열 만들기
  // {
  //   const result = students.map((student) =>
  //      student.score
  //   );
  //   console.log(result);
  // }

  // 학생들중 점수가 50점 이하인 학생이 있는지 확인하기
  // {
  //   const result = students.some((student) =>
  //     student.score <= 50
  //   );
  //   console.log(result);

  //   const result2 = !students.every((student) =>
  //   student.score >= 50
  //   );
  //   console.log(result2) ;
  // }

  // 학생들의 평균 점수구하기 (reduce 배열 하나하나를 돌면 서 값을 누적할 때 사용)
  // {
  //   const result = students.reduce((prev, curr) =>
  //      prev + curr.score, 0
  //      );
  //   console.log(result/5);
  // } 

  // 학생들의 모든 점수를 문자열로 변환
  // {
  //   const result = students.map((student) => student.score
  //   ).filter((score) => score >= 50)
  //   .join();
  //   console.log(result);
  // }

  // 학생들의 점수를 문자열로 변환뒤 오름차순으로 정렬
//   {
//   const result = students.map((student) => student.score)
//   .sort((a, b) => a - b)
//   .join();
  
//   console.log(result);
//   }

// }