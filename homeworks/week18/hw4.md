## gulp 跟 webpack 有什麼不一樣？我們可以不用它們嗎？
gulp 是一個基於 Node.js 加強工作流程的自動化工具，比如 compile css、minify js、壓縮圖片等;而 webpack 是 JavaScript 的模組打包工具，可以將 js、css、圖片等前端資源打包起來瀏覽器看得懂的內容，且可以像 Node.js 那樣模組化開發。
可以不用，就是比較不方便什麼都要自己來。

## hw3 把 todo list 這樣改寫，可能會有什麼問題？
因為每一次新增和刪除都要重新 render 一次，會有效能的問題，消耗資源在不要清掉的東西上。

## CSS Sprites 與 Data URI 的優缺點是什麼？
根據 w3schools 對 CSS Sprites 的描述:
"An image sprite is a collection of images put into a single image.
A web page with many images can take a long time to load and generates multiple server requests.
Using image sprites will reduce the number of server requests and save bandwidth."
CSS Sprites 是一個可以把多個圖片合併成一個圖片，以減少對 server 的 request 並節省頻寬，假設今天某個網站有 100 個圖片，那就要發出 100 次 requests，透過 CSS Sprites 就只要發出一次 request 就可以取得圖片，讓 server 的負擔可以大大減少，之後再交由 client 把每個大圖片的小圖片獨立出來，再透過 css 的設定重新編排定位。

優點是可以減少 server 的工作量，提高網頁的載入速度;缺點就是設計起來較為困難，必須精測每個圖片的位置，且如果有些微圖片要改動，整張合併的圖都要改動。

Data URI 是一種檔案格式，主要是由 base64 編碼之後，以文字的方式來儲其資料全部都是經過 base64 編碼之後，以文字的方式來儲存的，這樣的好處就是不用透過外部的檔案來載入，普遍的情境用在將圖片嵌入網頁上。
優點跟 CSS Sprities 很像，也是減少 HTTP requests 的數量，使網頁載入的速度更快。
缺點是因為它不是圖檔所以無法快取，每次都要出現都要解碼下載，且每次圖檔變更都要重新編碼，編碼後的檔案也會比原始檔案大。
