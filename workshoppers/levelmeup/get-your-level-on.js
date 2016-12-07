const level = require('level');
const directory = process.argv[2];
const key = process.argv[3];
const db = level(directory);
db.get(key, (err, value) => {
  if (err) {
    throw err;
  }
  console.log(value);
})
