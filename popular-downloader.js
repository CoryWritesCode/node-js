const rp = require('request-promise');
const path = require('path');
const fs = require('fs');

rp('https://reddit.com/r/popular.json')
  .then(res => {
    JSON.parse(res).data.children.forEach(item => {
      if (item.data.is_video == true) {
        fs.writeFile(`./downloads/${item.data.title}`, item.data.fallback_url);
      } else if (path.extname(item.data.url) == '.jpg') {
        fs.writeFile(`./downloads/${item.data.title}`, item.data.url);
      } else if (path.extname(item.data.url) == '.gif') {
        fs.writeFile(`./downloads/${item.data.title}`, item.data.url);
      }
    })
  })