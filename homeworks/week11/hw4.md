## 請說明雜湊跟加密的差別在哪裡，為什麼密碼要雜湊過後才存入資料庫
雜湊是單向的，將無限多個輸入經過特定的處理或演算變成有限多個輸出，也就是說不同的輸入可能得到兩個一樣的輸出;加密也是經過特定的處理或演算，但不同之處在於它是雙向的，經過加密的輸出可以還原成原本的輸入。
密碼沒有經過雜湊，而是存明碼的話，如果有駭客入侵資料庫，密碼便會被知道，如果經過雜湊安全性便會大大提升，駭客即使入侵資料庫也無法知道密碼。

## 請舉出三種不同的雜湊函數
>SHA 系列：
  SHA-0
  SHA-1
    SHA-1 已經被證明不夠安全。（在可接受的時間範圍內，可以找到內容不相同輸入卻得到相同輸出。）
  SHA-2
    SHA-256
    SHA-512
 SHA-3
  SHA3-256
  SHA3-512
>MD5
  MD5 也已經被證明不夠安全。（在可接受的時間範圍內，可以找到內容不相同輸入卻得到相同輸出。）
>BLAKE2

## 請去查什麼是 Session，以及 Session 跟 Cookie 的差別
Session 像是一個用來解決在 HTTP 協議無狀態的情況下，Server 和 Client 端可以溝通、產生對話的機制，通常會藉助 Cookie 和 Server 端實現。兩者的差別在於 Session 是儲存在 Server 端，Cookie 是儲存在 Client 端，也因為 Cookie 是儲存在 Client 端，儲存大小有限，且能夠被任何人看見，所以有安全上的問題，於是便有新的會話機制產生，也就是 Session。

##  `include`、`require`、`include_once`、`require_once` 的差別
require 通常放在 PHP 程式的最前面，PHP 程式在執行前，就會先讀入 require 所指定引入的檔案，使它變成 PHP 程式網頁的一部份。常用的函式可以寫成一個函式庫檔案，然後用這個方法將它引入網頁中。
require_once 的作用和 require 是幾乎相同的，唯一的差別在於 require_once 會先檢查要引入的檔案是不是已經在該程式中的其他地方被引入過了；如果有的話，就不會再次重複引入該檔案。
include 一般是放在流程控制的處理區段中。PHP 程式網頁在讀到 include 的檔案時，才將它讀進來。
include_once 如同 require_once，include_once 會先檢查欲引入檔案的內容是不是在之前就已經引入過了；如果是的話，便不會再次重複引入同樣的內容。
另外 require 在找不到檔案時會觸發 Fatal Error 使程式停止執行，include 在找不到檔案時只會觸發 Warning，不會對程式有任何影響，除非程式有重大錯誤。
還有條件判斷 if、和迴圈 while、for，只能用 include。

參考網站：
https://sanji0802.wordpress.com/2008/02/25/php%E5%BC%95%E7%94%A8%E6%AA%94%E6%A1%88%E7%9A%84%E5%87%BD%E6%95%B8%E5%8D%80%E5%88%A5requirerequire_onceincludeinclude_once/