const fs = require("fs");

const cat = (str, done) => {
  const fileName = str.split(" ").splice(1).join("");
  fs.readFile(fileName, (err, data) => {
    if (err) throw err;
    done(data);
  });
};
module.exports = cat;
