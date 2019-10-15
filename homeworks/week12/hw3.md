## 請說明 SQL Injection 的攻擊原理以及防範方法
SQL Injection 是利用 SQL 語法上的漏洞，透過特殊字元或更改語法邏輯等方式，對資料庫進行刪除、竄改、竊取的行為，例如在帳號欄位輸入 'OR 1=1 --，由於 1=1 恆正，--將後方接著的內容註解化，攻擊者便可在不被驗證帳號密碼的情況下登入。
防範方式：過濾掉會造成問題的字元，例如單引號和雙引號，或是通過參數來傳遞使用者傳遞的變數，而不是直接被結合到SQL的語法。

## 請說明 XSS 的攻擊原理以及防範方法
XSS (Cross-Site Scripting) 跨站腳本攻擊，在網站寫入惡意的程式碼，通常是 JavaScript，達成竊取資料或其他惡意目的。
XSS 攻擊又可以分為三種：
Stored XSS (儲存型)，經過後端，經過資料庫。
Reflected XSS (反射型)，經過後端，經過資料庫。
DOM-Based XSS (基於 DOM 的類型)，通過url傳入引數去控制觸發。
防範：儲存型和反射型因為會經過後端，所以必須由後端進行防範，利用 escape 將 <、>、/、"、'、;等等的字元以及 <script>、onerror=跳脫與過濾掉;DOM 型的話則要由前端來防範，要注意的點都是要盡量將 html 字串轉變成純文字，跳脫任何會產生問題的字元。

## 請說明 CSRF 的攻擊原理以及防範方法
Cross Site Request Forgery，跨站請求偽造。
是一種在使用者登入的情況下，在不同 domain 底下偽造 request 讓使用者在不知情的情況下執行非本意的操作的攻擊方式，防禦方法就是確保 request 是在同一個 domain 發出，而且是由本人發出。有幾種防禦方法：
1.透過檢查 Referer 的方式，看是不是合法的 domain。
2.使用圖形、簡訊驗證碼等。
3.添加校驗的 token，每發出一次 request 就會帶上一段 token，再與存在 server 的 session 做比對，一樣的話就代表是使用者本人發出的 request。
4.Double Submit Cookie，與上一個類似，差別在於不需要儲存東西在 server，由 client 端設定 token 便可。
5.browser 本身的防禦，不過目前只限於 chrome。