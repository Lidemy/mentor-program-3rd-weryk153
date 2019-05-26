const request = require('request');

request.get('https://api.twitch.tv/kraken/games/top/?client_id=mag8li1ax663tdtc786sy16rj2qisa',
  (error, response, body) => {
    const json = JSON.parse(body);
    json.top.forEach((element) => {
      // eslint-disable-next-line no-underscore-dangle
      console.log(`${element.game._id} ${element.game.name}`);
    });
  });
/*
const Obj = {
  url: 'https://api.twitch.tv/helix/games/top',
  headers: {
    'Client-ID': 'mag8li1ax663tdtc786sy16rj2qisa',
  },
};
request.get(Obj,(error,response,body) => {
  const result = JSON.parse(body);
  console.log(result);
  result['data'].forEach((item) => {
    console.log(`${item.id} ${item.name}`);
  });
});
*/
