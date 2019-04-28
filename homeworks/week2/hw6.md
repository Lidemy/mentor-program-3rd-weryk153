``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1. 執行第 2 行，建立函式 isValid
2. 執行第 3 行，設定變數 i 是 0，檢查 i 是否 <= arr.length 陣列長度，是，繼續執行，進入第一個迴圈
3. 執行第 4 行，判斷 arr[0] 陣列第 0 個位置的數值是否小於等於 0，從第 0 個位置開始，不是，i++，一直到第 5 個位置都不小於等於 0，繼續往下
4. 執行第 6 行，設定變數 i 是 2，檢查 i 是否 <= arr.length 陣列長度，是，繼續執行，進入第二個迴圈
5. 執行第 7 行，判斷 arr[2] 陣列第 2 個位置的數值是否不等於 arr[1]  + arr[0]，否
6. 第一圈迴圈結束，跑回第 6 行，i++，i 變成 3，檢查是否小於陣列長度 6，是，繼續執行
7. 執行第 7 行，判斷 arr[3] 是否不等於 arr[2] + arr[1]，否
8. 第二圈迴圈結束，跑回第 6 行，i++，i 變成 4，檢查是否小於陣列長度 6，是，繼續執行
9. 執行第 7 行，判斷 arr[4] 是否不等於 arr[3] + arr[2]，是，回傳'invalid'
10. 執行完畢