console.log(1)
setTimeout(() => {
  console.log(2)
}, 0)
console.log(3)
setTimeout(() => {
  console.log(4)
}, 0)
console.log(5)

瀏覽器在跑 JavaScript 是 single thread （單執行緒），一次只能執行一個任務，所以要有一個機制來處理非同步的東西，而機制的其中一個環節就叫 Event Loop。為了理解 Event Loop 是如何運作，首先要先知道 Stack 和 Queue 這兩個資料結構，Stack 就像是洗盤子，將客人吃完的盤子堆起來，先吃完的會在最下面，再從上面洗到最底下;Queue 就像是在餐廳前面排隊一樣，先排的會先進去。
而 Stack 後進先出的特性很適合拿來當執行程式時的資料結構，就像 function 呼叫 function 一樣，一定是後面的執行完才跑回來執行前面的，因此底層會利用 Stack 來實作這個呼叫的流程，稱作 Call Stack。

但如果只有 Call Stack 可能會造成阻塞（blocking）的問題，例如執行某個函式需要等待很長一段時間，整個瀏覽器就卡在哪裡，必須等到執行結束後瀏覽器才會繼續運作，為了要解決阻塞的問題，可以透過非同步（asynchronous）的方式搭配 callback，比如說 setTimeout。為了理解為什麼 JavaScript 之所以能夠透過非同步的方式（asynchronous）「看起來」一次處理很多事情，便需要了解 Callback Queue。

以這題來看
1、console.log(1) 會先被放到 stack 執行，然後 pop off，印出 1 。
2、setTimeout(() => {console.log(2)}, 0) 被放到 stack ，但 setTimeout 實際上是一個瀏覽器提供的 API ，而不是 JS 引擎本身的功能；於是瀏覽器提供一個計時器給我們使用，setTimeout 中的 callback function 會被放到 WebAPIs 中，這時候 setTimeout 這個 function 就已經執行結束，並從 stack 中脫離。當計時器的時間到，便會把要執行的 cb 放到 callback queue。
3、console.log(3) 被放到 stack 執行，然後 pop off，印出 3。
4、setTimeout(() => {console.log(4)}, 0) 放到 stack 執行 pop off，cb 放到計時器，時間到把 cb 放到 callback queue。
5、console.log(5) 放到 stack 執行，然後 pop off，印出 5 。
6、確定 stack 空了，把 callback queue 的 cb 丟到 stack 執行，console.log(2) 印出 2，pop off，console.log(4)，印出 4，pop off，結束。
簡單來說 Event Loop 的作用就是 不斷檢查 stack 是否為空，是的話就把 callback queue 的東西丟到 stack 執行。

