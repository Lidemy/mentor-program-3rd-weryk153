/* eslint-disable */
"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}var Stack=function(){function e(){_classCallCheck(this,e),this.arr=[]}return _createClass(e,[{key:"push",value:function(e){this.arr.unshift(e)}},{key:"pop",value:function(){return this.arr.shift()}}]),e}(),stack=new Stack;stack.push(10),stack.push(5),console.log(stack.pop()),console.log(stack.pop());var Queue=function(){function e(){_classCallCheck(this,e),this.arr=[]}return _createClass(e,[{key:"push",value:function(e){this.arr.unshift(e)}},{key:"pop",value:function(){console.log(this.arr[this.arr.length-1]),this.arr.splice(-1,1)}}]),e}(),queue=new Queue;queue.push(1),queue.push(2),queue.pop(),queue.pop();