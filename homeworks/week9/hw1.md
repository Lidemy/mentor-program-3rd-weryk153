資料庫名稱：comments

| 欄位名稱 | 欄位型態 | 說明 |
|----------|----------|------|
|  id  |    integer      | 留言 id     |

資料庫名稱：users

欄位名稱	  欄位型態	     說明
id	       integer	    使用者 id
username	 VARCHAR(16)	帳號
password	 VARCHAR(16)	密碼
nickname	 VARCHAR(64)	暱稱

--------------------------------
資料庫名稱：comments

欄位名稱	  欄位型態	     說明
id	       integer	    留言 id
content    TEXT         留言內容
created_at DATETIME     留言時間
user_id    integer      使用者 id

身為使用者，可以註冊、登入、登出。
身為使用者，登入後可以留言，並顯示出留言者的暱稱跟留言內容以及留言時間。
身為使用者，可以編輯、刪除留言。
身為系統，應該顯示出留言者的暱稱跟留言內容以及留言時間。
身為系統，顯示留言時應該按照時間排序，最新留言顯示在最上面。
身為系統，可以刪除留言，但不能編輯留言。

--------------------------------
前台
index.php 顯示所有留言、新增留言
login.php 帳號登入
register.php 註冊帳號

管理後台
add_comment.php
conn.php
delete.php 刪除留言
handle_register.php
logout.php
