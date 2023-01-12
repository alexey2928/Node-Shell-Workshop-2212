const fs = require("fs");

const sort = (str, done) => {
  const fileName = str.split(" ").splice(1).join("");
  fs.readFile(fileName, (err, data) => {
    if (err) throw err;
    // console.log(typeof data);
    data = data.toString().split("\n").sort().join("\n");
    done(data);
  });
};
module.exports = sort;