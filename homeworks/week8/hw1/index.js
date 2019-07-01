const request = new XMLHttpRequest();
const btn = document.querySelector('.btn');
const container = document.querySelector('.container');
const body = document.querySelector('body');
const lottery = document.querySelector('.lottery');

function getPrize(prizeImage, prizeResult) {
  const div = document.createElement('div');
  div.classList.add('prize');
  div.innerHTML = `
  <img class="prize-image" src=${prizeImage}>
  <div class="prize-result">${prizeResult}</div>
  `;
  container.appendChild(div);
  btn.classList.add('none');
  lottery.classList.add('none');
}

btn.addEventListener('click', () => {
  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      const response = request.responseText;
      const json = JSON.parse(response);
      if (json.prize === 'FIRST') {
        body.classList.add('bg-blue');
        const prizeImage = 'https://s3-ap-northeast-1.amazonaws.com/vprowebasia/wall/2018/wall0205.jpg';
        const prizeResult = '恭喜你中頭獎了！日本東京來回雙人遊！';
        getPrize(prizeImage, prizeResult);
      } else if (json.prize === 'SECOND') {
        const prizeImage = 'http://img2.3png.com/6444420b9ffd14ee93ea97a4f91e0c6d7d47.png';
        const prizeResult = '二獎！90 吋電視一台！';
        getPrize(prizeImage, prizeResult);
      } else if (json.prize === 'THIRD') {
        const prizeImage = 'https://www.youtube.com/yts/img/yt_1200-vfl4C3T0K.png';
        const prizeResult = '恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！';
        getPrize(prizeImage, prizeResult);
      } else if (json.prize === 'NONE') {
        body.classList.add('bg-black');
        const div = document.createElement('div');
        div.classList.add('prize');
        div.innerHTML = `
        <div class="noprize">銘謝惠顧</div>
        `;

        container.appendChild(div);
        btn.classList.add('none');
        lottery.classList.add('none');
      } else {
        alert('系統不穩定，請再試一次');
      }
    } else {
      alert('系統不穩定，請再試一次');
    }
  };

  request.open('GET', 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery', true);
  request.send();
});
