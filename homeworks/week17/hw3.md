var a = 1
function fn(){
  console.log(a) //undefined
  var a = 5
  console.log(a) //5
  a++
  var a
  fn2()
  console.log(a) //20
  function fn2(){
    console.log(a) //6
    a = 20
    b = 100
  }
}
fn()
console.log(a) //1
a = 10
console.log(a) //10
console.log(b) //100

要了解 hoisting 要先了解 Execution Contexts，每當進入一個 function 的時候，就會產生一個 Execution Contexts(EC)，除了 function 有 EC，還有一個 global EC，而所有 function 需要的資訊都會存在 EC。
JS 引擎分成編譯階段跟執行階段兩個步驟，而 hoisting 就是在編譯這個階段做處理的。JS 在編譯階段的時候，會處理好所有的變數及函式宣告並且加入到 scope 裡面，在執行的時候便可以去使用它。上面的程式碼便可以拆成幾個步驟。
1、global EC 的編譯階段：a hoisting => undefined, fn: function
2、global EC 的執行階段：a: 1
3、fn EC 的編譯階段：a: undefined, fn2: function
4、fn EC 的執行階段：console.log(a) => undefined, a: 5, console.log(a) => 5, a++ => a: 6
5、fn2 EC 的編譯階段：無
6、fn2 EC 的執行階段：console.log(a) => fn2 EC 沒有 a 這個變數，去上一層找 => 6, a: 20, b: 100 但fn2 EC 沒有 b 這個變數去 fn EC 找，也沒有，去 global EC 找，也沒有，b 被宣告為全域變數，global scope 把 b 設成 100
7、fn2 執行完畢 pop off
8、console.log(a) => 20
9、fn 執行完畢 pop off
10、console.log(a) => 1
11、a: 10
12、console.log(a) => 10
13、console.log(b) => 100
