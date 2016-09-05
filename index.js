var argument = process.argv[2];
var help = require('./help');


if (argument === "help"){
  console.log(help());
}
