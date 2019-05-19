const request = require('request');
const process = require('process');

if (process.argv[2] === 'list') {
  request.get('https://lidemy-book-store.herokuapp.com/books?_limit=20',
    (error, response, body) => {
      const json = JSON.parse(body);
      json.forEach((element) => {
        console.log(`${element.id} ${element.name}`);
      });
    });
} else if (process.argv[2] === 'read') {
  request.get(`https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    (error, response, body) => {
      const json = JSON.parse(body);
      if (json.name === undefined) {
        console.log('無此id書籍');
      } else {
        console.log(`${json.name}`);
      }
    });
}
