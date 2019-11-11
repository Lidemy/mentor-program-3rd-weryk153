## CSS 預處理器是什麼？我們可以不用它嗎？
CSS 預處理器用一種專門的編程語言，進行 Web 頁面樣式設計，然後再編譯成正常的 CSS 文件，以供項目使用。資料來源：https://changtsuiling.gitbooks.io/sass/chapter1/1-1-shi-me-shi-css-yu-chu-li-qi-ff1f.html?q=
可以，CSS 預處理器就是一個工具，像 Bootstrap 一樣，不用也沒差，只是用了可以帶來很多方便性，既然有好的工具不用白不用。 

## 請舉出任何一個跟 HTTP Cache 有關的 Header 並說明其作用。
Vary。用來表示 Server 會以什麼基準字段来區分、篩選暫存版本。不同瀏覽器可能有不同的網頁內容，IE 就用 IE 的 cache，Chrome 就用 Chrome 的 cache，server獲取到請求的 User-Agent 字段做處理就好。但是用户請求的是代理 server，而不是原 server 的話，且代理 server 如果直接把暫存的 IE 版本資源给了非 IE 的 Client 端就會出問題。
只要加上Vary: User-Agent，代理 sever 就會以 User-Agent 這個字段来區別暫存版本，傳给 Client 端正確的版本。

## Stack 跟 Queue 的差別是什麼？
Stack 和 Queue 是兩種資料結構，分別用來處理兩種不同的場合。Stack 就像是洗盤子，將客人吃完的盤子堆起來，先吃完的會在最下面，再從上面洗到最底下;Queue 就像是在餐廳前面排隊一樣，先排的會先進去。

## 請去查詢資料並解釋 CSS Selector 的權重是如何計算的（不要複製貼上，請自己思考過一遍再自己寫出來）
基本的的權重大小：inline style > ID > Class > Element > *
權重有點像是橋牌一樣，同個花色比大小，不同花色黑桃 > 愛心 > 菱形 > 梅花。CSS 也一樣，Class 再多也比不上一個 ID。牌與牌之間可以組合，就像寫得越詳細、越是特定權重就越大，相同權重後者會覆蓋前者。
