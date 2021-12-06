// class
// class에서 함수를 선언할 때 function을 안 붙여도 된다.

class Counter {
  constructor(run5Time) {
    this.counter = 0;
    this.callback = run5Time;
  }

  increase() {
    this.counter++
    console.log(this.counter)
    if(this.counter % 5 === 0) {
      this.callback && this.callback(this.counter);
    } 
  } 
}

const coolCounter = new Counter();

function printSomething(num) {
  console.log(`wow! ${num}`);
}

function alertNum(num) {
  alert(`alert! ${num}`);
}

// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();

const printCounter = new Counter(printSomething);
const alertCounter = new Counter(alertNum);
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();