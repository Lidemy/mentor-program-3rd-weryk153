for(var i=0; i<5; i++) {
  console.log('i: ' + i)
  setTimeout(() => {
    console.log(i)
  }, i * 1000)
}
首先可以把上面這段程式碼看作：
var i;
for(i=0; i<5; i++) {
  console.log('i: ' + i)
  setTimeout(() => {
    console.log(i)
  }, i * 1000)
}
i 在這裡是全域變數，任何地方都能夠存取到，每跑一次迴圈，都會先印出 i 目前的值，然後把 setTimeout 放到計時器，計時一到便把要執行的 cb 丟到 callback queue，直到 i = 5 跳出迴圈，接著把 callback queue 的 cb 丟到 stack，此時 i = 5，便會印出 5 個 5。
所以依序會印出：
i: 0
i: 1
i: 2
i: 3
i: 4
5
5
5
5
5