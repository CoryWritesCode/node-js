const path = require('path');
const fs = require('fs');

var chirpPath = path.join(__dirname, '../chirps.json');

fs.readFile(chirpPath, function (err, data) { 
  if (err) console.log(err);

  JSON.parse(data).chirps.forEach(chirp => {
    console.log(chirp);
  })
 });