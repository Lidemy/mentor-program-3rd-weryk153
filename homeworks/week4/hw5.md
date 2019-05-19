## 請以自己的話解釋 API 是什麼
我覺得是一種溝通的介面，輸入特定指令就會產生相對應的結果，好比一台自動販賣機的介面，按下按鈕，內部的機制運作後，便掉下我們想要的飲料，我們不可能直接跟機器說我們想要什麼飲料，所以就以雙方都看得懂的方式建立一個介面，以此來溝通。

## 請找出三個課程沒教的 HTTP status code 並簡單介紹
403 Forbidden
伺服器已經理解請求，但是拒絕執行它。可以理解成沒有權限訪問此站，伺服器收到請求但拒絕提供服務。
408 Request Timeout
請求超時。根據HTTP規範，用戶端沒有在伺服器預備等待的時間內完成一個請求的傳送，用戶端可以隨時再次提交這一請求而無需進行任何更改。
504 Gateway Timeout
伺服器上的服務沒有回應。


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

###回傳所有餐廳資料; Method:get; path:/restaurants 
[
  {
    "id": 1,
    "name": "井上禾食",
    “address: "106台北市大安區嘉興街399號",
    "phone number": "0922799649"
  },
  {
    "id": 2,
    "name": "佐藤咖哩",
    “address: "106台北市大安區和平東路三段228巷9號",
    "phone number": "0287326523"
  },
  {
    "id": 3,
    "name": "Kitchen Island 中島",
    “address: "106台北市大安區忠孝東路三段276巷12號",
    "phone number":"0989234839"
  }
]

###回傳單一餐廳資料; Method:get; path:/restaurants/:id
範例：/restaurants/1
{
  "id": 1,
  "name": "井上禾食",
  “address: "106台北市大安區嘉興街399號",
  "phone number": "0922799649"
},

###刪除餐廳; Method:delete; path:/restaurants/:id

###新增餐廳; Method:post; path:/restaurants
範例：

{
  "name": "Cin Cin Osteria 請請義大利餐廳(逸仙店)",
  “address: "110台北市信義區逸仙路50巷22號",
  "phone number":"0287862056"
}


###更改餐廳; Method:patch; path:/restaurants/:id
範例：/restaurants/1
{
  "name": "蔬漫小姐Miss Shu maan. House",
  “address: "11065台北市信義區永吉路120巷82號",
  "phone number":"0227662386"
}

