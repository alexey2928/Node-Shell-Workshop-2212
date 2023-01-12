const fs = require("fs");

const tail = (str, done) => {
  const fileName = str.split(" ").splice(1).join("");
  fs.readFile(fileName, (err, data) => {
    if (err) throw err;
    // console.log(typeof data);
    data = data.toString().split("\n").splice(-10).join("\n");
    done(data);
  });
};
module.exports = tail;