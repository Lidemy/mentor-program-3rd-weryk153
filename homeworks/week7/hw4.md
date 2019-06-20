## 什麼是 DOM？
DOM 全名為 Document Object Model，因為 JavaScript 不能對 html 直接操作，所以會先用 DOM 轉換成 object， html 的標記就會變成一個樹狀圖，JavaScript 就可以針對每個節點像是 element 和 text 做改變。

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
事件會從根節點開始向下傳遞，一直傳到我們點擊的目標再傳回去，傳到目標前稱作捕獲階段，從目標傳回去稱作冒泡階段。簡易流程大概是這樣：
Window => Document => <html> => <body> => target => <body> => <html> => Document => Windows。

## 什麼是 event delegation，為什麼我們需要它？
事件代理有點像是如果在一個 target 加上事件監聽，那這個 target 底下的節點都會被加上事件監聽，這樣的好處就是不用針對各個節點加上事件監聽，只要針對上層的節點加上就好。

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
以這週作業的第一題和第三題為例，比如第一題的作業規範：以後如果再點一次畫面，不會有任何反應。就要在點擊事件中加入 event.stopPropagation()，停止後續的事件，也就是說 event.stopPropagation()用來取消事件的傳遞，要注意的是它是取消接下來的事件傳遞，就像把樹狀圖的某個節點切掉，但是其他同層級的節點還是可以繼續傳遞。
第三題就會用到 e.preventDefault，用來取消瀏覽器的預設動作。，像是 html 的 <a> 、 <input> 和 <form>，都可以用 e.preventDefault來取消。


