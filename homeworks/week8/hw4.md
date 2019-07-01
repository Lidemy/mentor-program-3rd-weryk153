## 什麼是 Ajax？
即「Asynchronous JavaScript and XML」，重點在 Asynchronous 非同步，原本寫的 JavaScript 幾乎都是同步執行，但這樣會產生一個問題，因為程式是一行一行執行，在 Response 回來之前都會卡在那一行，整個頁面就會卡死，如果於是就用 Callback Function，當 Response回來後，就呼叫這個 Function，把資料帶進來。
任何非同步跟伺服器交換資料的 JavaScript 都能稱作 Ajax。

## 用 Ajax 與我們用表單送出資料的差別在哪？
表單每一次要新的資料都要換頁，但有時候要的資料只會讓畫面部分改變，這時候就可以用 AJAX 達成。用表單提交資料的話會直接送 reponse 到瀏覽器，瀏覽器便會直接 render 出新的結果，但用 Ajax 的話，瀏覽器會把 response 轉傳給 javascript，如果用 JavaScript 發 request 到 server 得到結果就不用換頁。

## JSONP 是什麼？
即「JSON with Padding」，是一種跨來源請求的方法，JSONP 利用 JavaScript Callback 機制繞過了瀏覽器的安全限制問題。其方法是利用 JavaScript 動態的載入程式到 <script src="…"> 標記的 src 欄位中，以便載入外部的 JSON 資料或 JavaScript 函式庫到網頁中使用的方法。透過帶過去的 callback 這個參數當作函式名稱，把 JavaScript 物件整個傳到 Function 裡面，就可以在 Function 裡面拿到資料。但 JSONP 的缺點就是你要帶的那些參數永遠都只能用附加在網址上的方式（GET）帶過去，沒辦法用 POST。

## 要如何存取跨網域的 API？
利用 CORS，即「Cross-Origin Resource Sharing」，跨來源資源共享。就可以將 API 提供的參數帶入到 GET 的參數上，或是用 POST 的方式將參數帶入到 Header 發 Request，Server 端便會發送我們想要的 Response。
另一種方式是用上面提到的 JSONP，利用<script>來達成跨來源請求。

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？
因為第四週是用 Node.js 直接發送 Request，不會受到瀏覽器基於「同源政策」的限制，可是當我們透過瀏覽器發送 Request 就會遇碰到跨網域的問題。
