const request = new XMLHttpRequest();

request.onload = () => {
  if (request.status >= 200 && request.status < 400) {
    const response = request.responseText;
    const json = JSON.parse(response);
    json.streams.forEach((item) => {
      const div = document.createElement('div');
      div.classList.add('channels');
      div.innerHTML = `
      <a href=${item.channel.url} target="_blank" class="link">
        <img src=${item.preview.medium} class="img-bg">
        <div class="col">
          <img src=${item.channel.logo} class="img-logo">
          <div class="status">
            <p>${item.channel.status}</p>
            <p>${item.channel.display_name}</p>
          </div>
        </div>
      </a>
      `;

      document.querySelector('.main-page').appendChild(div);
    });
  } else {
    alert('系統不穩定，請再試一次');
  }
};

request.open('GET', 'https://api.twitch.tv/kraken/streams/?game=League%20of%20Legends&limit=20', true);
request.setRequestHeader('Content-Type', 'application/vnd.twitchtv.v5+json');
request.setRequestHeader('Client-ID', 'mag8li1ax663tdtc786sy16rj2qisa');
request.send();
