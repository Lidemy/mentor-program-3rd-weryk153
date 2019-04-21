## 請解釋後端與前端的差異。
前端就是看得到的，能夠與我們互動，比如我們看到的網站：後端就是看不到的部分，比如伺服器和資料庫。

## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

input "JavaScript" 
瀏覽器去問 DNS 伺服器，google.com 怎麼走
DNS回說：你去8.8.8.8就是了
瀏覽器送 request 給 8.8.8.8
位在 8.8.8.8 的 server 收到request 
server 去問資料庫，查詢 "JavaScript"
資料庫找到 "JavaScript"，回傳資料給 server 
server 回傳 response 給瀏覽器
瀏覽器解析回傳的資料並顯示出來 

## 請列舉出 3 個 command line 指令並且說明功用

find path -name "filename" 在某個路徑上找檔名，
peseta noodle 讓電腦不休眠
df -h 查看現在硬碟使用量
