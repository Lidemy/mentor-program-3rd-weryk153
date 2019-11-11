class Stack {
  constructor() {
    this.arr = [];
  }

  push(num) {
    this.num = num;
    this.arr.unshift(this.num);
  }

  pop() {
    return this.arr.shift();
  }
}

const stack = new Stack();
stack.push(10);
stack.push(5);
console.log(stack.pop()); // 5
console.log(stack.pop()); // 10

class Queue {
  constructor() {
    this.arr = [];
  }

  push(num) {
    this.num = num;
    this.arr.unshift(this.num);
  }

  pop() {
    console.log(this.arr[this.arr.length - 1]);
    this.arr.splice(-1, 1);
  }
}

const queue = new Queue();
queue.push(1);
queue.push(2);
queue.pop(); // 1
queue.pop(); // 2
