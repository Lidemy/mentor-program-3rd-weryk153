const obj = {
  value: 1,
  hello: function() {
    console.log(this.value)
  },
  inner: {
    value: 2,
    hello: function() {
      console.log(this.value)
    }
  }
}
  
const obj2 = obj.inner
const hello = obj.inner.hello
obj.inner.hello() //2
obj2.hello() //2
hello() //undefiend

this 的值跟作用域跟程式碼的位置在哪裡完全無關，只跟「如何呼叫」有關。可以把 
obj.inner.hello() 看作是 obj.inner.hello().call(obj.inner)
obj2.hello() 看作是 obj2.hello().call(obj2)
hello() => hello().call()
而 call 的第一個參數就是 this
所以 
obj.inner.hello().call(obj.inner) 這裡就會 console.log(obj.inner.value) => 2
obj2.hello().call(obj2) => console.log(obj.inner.value) => 2
hello() => hello().call() 因為沒東西便會印出 undefined