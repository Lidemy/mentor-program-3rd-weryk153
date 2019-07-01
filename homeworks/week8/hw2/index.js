const request = new XMLHttpRequest();

document.querySelector('.btn').addEventListener('click', () => {
  let data = null;
  if (document.querySelector('.textarea').value !== '') {
    data = document.querySelector('.textarea').value;
  }

  request.open('POST', 'https://lidemy-book-store.herokuapp.com/posts', true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  request.send(`content=${data}`);
});

request.onload = () => {
  if (request.status >= 200 && request.status < 400) {
    const response = request.responseText;
    const json = JSON.parse(response);
    for (let i = json.length - 1; i >= json.length - 21; i -= 1) {
      if (i >= 0) {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <p>${json[i].content}</p>
        `;

        document.querySelector('.board-message').appendChild(div);
      }
    }
  } else {
    alert('系統不穩定，請再試一次');
  }
};

request.open('GET', 'https://lidemy-book-store.herokuapp.com/posts', true);
request.send();
