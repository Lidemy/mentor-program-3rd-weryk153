const request = require('request');

request.get(
  'https://lidemy-book-store.herokuapp.com/books?_limit=10',
  (error, response, body) => {
    const json = JSON.parse(body);
    json.forEach((element) => {
      console.log(`${element.id} ${element.name}`);
    });
  },
);
