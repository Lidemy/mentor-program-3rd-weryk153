## 交作業流程
新開一個 branch：hw1
切換到 branch hw1：git checkout hw1
修改 hw1.md 後 commit：git commit -am 'week1'
寫完作業後上傳到 github：git push origin hw1
上傳後在自己的mentor-program-3rd網頁按下 compares&pull request
輸入標題和心得問題後按下 Create pul request
到第三期交作業專用 repo，建立新的 issue
標題輸入[Week(第幾週)]，貼上 pull 的網址
把 merge 完的 master pull 下來
切換到 branch master：git checkout master
把 merge 後的 master pull 下來：git pull origin master
刪除 branch hw1：git branch -d hw1