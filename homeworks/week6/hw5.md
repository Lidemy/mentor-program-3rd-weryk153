## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
<article>
指的是一個頁面的區段，其中包含由文件、頁面或網站的獨立部分所形成之結構。而這可能是一個論壇發文，一則報章雜誌的文章，一個網站 log 紀錄，一個使用者所送出的評論，或是其它獨立項目的內容。
可以和<section>搭配使用，總之就是用來放一個獨立完整的文章。裡面可以包含<p>、<h1>、<footer>和<section>元素。

<aside>
主要放<article>之外的相關內容，通常會顯示成側欄。<aside>的內容也是主要文件的一部分，其目的不是用來補充說明，而是可以獨立出來的內容。

<header>
預設為區塊元素，為文章或區塊定義標題、開頭、前言、引導或是協助瀏覽的群組。該元素通常包含了區段的標題(h1-h6 元素或是一個 hgroup 元素)，但並非必要的。一個頁面中可以有多個header。
另外，w3.org 中有提到 <header> 不能放在<footer>、<address>或另一個 <header>裡面。

## 請問什麼是盒模型（box model）
盒模型定義有四個區域，控制內邊距的 padding、控制外邊距的 margin、顯示主要內容的 content，和圍繞在 padding 和 content 的 border，從裡到外的順序是 content、padding、border 和 margin。

盒模型控制著頁面各元素的寬與高，比如當我們設定了一個元素的寬高時，所設定的數值還要再加上 padding 和 border，最後才會是這個元素的實際尺寸。

content-box：預設值，實際寬高＝所設定的數值＋border＋padding。
border-box：實際寬高＝所設定的數值(已包含border和padding)。

## 請問 display: inline, block 跟 inline-block 的差別是什麼？

block：元素的寬高、padding、border 和 margin 都可以調，一個元素佔滿整行。
inline：元素的寬高會根據內容顯示，所以寬高不能調，maring上下不能調，但是左右可以，padding 可以調。元素會排成一行。
inline-block：元素的寬高、padding、border 和 margin 都可以調，，和 block 的差別差在 inline-block 可以並排，block 不行。

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
static：postion 的預設值，position 為 static 的元素會照著瀏覽器預設的配置自動排版在頁面上，所有其他的屬性值都代表該元素會被定位在頁面上。

relative：position 為 relative 的元素設定 top 、 right 、 bottom 和 left 屬性，會使其元素「相對地」調整其原本該出現的所在位置，而不管這些「相對定位」過的元素如何在頁面上移動位置或增加了多少空間，都不會影響到原本其他元素所在的位置。

absolute：postion 為 absolute 的元素的定位點是在他所處上層容器的相對位置，往上找第一個 position 不是 static 的元素。如果沒有可以被定位的元素的話，那麼這個元素的定位就是相對於該網頁所有內容（也就是 <body> 元素）最左上角的絕對位置，

fixed：固定定位（position: fixed）的元素會相對於瀏覽器視窗來定位，不管頁面怎麼捲動，都會固定在相同的位置。和 relative 一樣使用 top 、 right 、 bottom 和 left 屬性來定位。
