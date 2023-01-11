// Require your function files
const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
const date = require("./date");
const echo = require("./echo");
const head = require("./head");
const tail = require("./tail");
const sort = require("./sort");
const wc = require("./wc");
//Output a prompt
process.stdout.write("prompt > ");

// The stdin 'data' event fires after a user types in a line
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim(); //remove the newline
  if (cmd === "pwd") pwd(done);
  if (cmd === "ls") ls(done);
  if (cmd.split(" ")[0] === "cat") cat(cmd, done);
  if (cmd.split(" ")[0] === "head") head(cmd, done);
  if (cmd.split(" ")[0] === "tail") tail(cmd, done);
  if (cmd.split(" ")[0] === "sort") sort(cmd, done);
  if (cmd.split(" ")[0] === "wc") wc(cmd, done);
  if (cmd === "date") date(done);
  if (cmd.split(" ")[0] === "echo") echo(cmd, done);
});

const done = (output) => {
  // show the output
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
  // show the prompt
};
