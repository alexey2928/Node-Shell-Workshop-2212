const fs = require("fs");
const head = (str, done) => {
  const fileName = str.toString().split(" ").slice(1).join("");
  fs.readFile(fileName, (err, data) => {
    if (err) throw err;
    data = data.toString().split("\n").splice(0, 10).join("\n");
    done(data);
  });
};
module.exports = head;