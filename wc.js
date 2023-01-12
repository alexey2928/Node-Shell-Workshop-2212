const fs = require("fs");
const sort = (str, done) => {
  const fileName = str.split(" ").splice(1).join("");
  fs.readFile(fileName, (err, data) => {
    if (err) throw err;
    // console.log(typeof data);
    const newlineCount = data
    .toString()
    //   .split(/\r\n?|\n/)
    .split('\n').length - 1;
    //.filter((w) => w !== "").length;
    const wordCount = data
    .toString()
    .split(/\s+/)
    .filter((w) => w !== "").length;
    const charCount = data.toString().split("").length;
    
    
    const result = `${newlineCount} ${wordCount} ${charCount} ${fileName}`;
    done(result);
  });
};
module.exports = sort;