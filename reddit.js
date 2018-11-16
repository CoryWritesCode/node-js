const rp = require('request-promise');
const path = require('path');
const fs = require('fs');

let popArt = path.join(__dirname, './popular-articles.json')
let articles = [];

rp('https://reddit.com/r/popular.json')
  .then(res => {
    JSON.parse(res).data.children.forEach(item => {
      let newObj = {
        author: item.data.author,
        title: item.data.title,
        url: item.data.url
      };
      articles.push(newObj);
    });
    fs.writeFileSync(popArt, JSON.stringify(articles));
  }).catch(err => console.log(err));