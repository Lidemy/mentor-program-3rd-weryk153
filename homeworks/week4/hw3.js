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
      console.log(`${json.name}`);
    });
} else if (process.argv[2] === 'delete') {
  request.get(`https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    (error, response, body) => {
      const json = JSON.parse(body);
      if (json.name === undefined) {
        console.log('沒有這東西');
      } else {
        request.delete(`https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
          console.log('成功刪除'));
      }
    });
} else if (process.argv[2] === 'create') {
  request.post(
    {
      url: 'https://lidemy-book-store.herokuapp.com/books/',
      form: {
        id: '',
        name: process.argv[3],
      },
    },
    (error, response, body) => {
      const json = JSON.parse(body);
      console.log(`成功新增${json.name}`);
    },
  );
} else if (process.argv[2] === 'update') {
  request.get(`https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    (error, response, body) => {
      const json = JSON.parse(body);
      if (json.name === undefined) {
        console.log('沒有此id，無法更新');
      } else {
        request.patch(
          {
            url: `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
            form: {
              name: process.argv[4],
            },
          },
          console.log(`成功更新 ${process.argv[3]} ${process.argv[4]}`),
        );
      }
    });
}
