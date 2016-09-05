var argument = process.argv[2];
var help = require('./help');
var deleteContact = require('./deleteContact');
var fs = require('fs');
var csv = require('csv');


if (argument === "help"){
  console.log(help());
}

if (argument === "deleteContact"){
  fs.readFile('./example.csv', function(error, data){
    if (error) {
      throw error;
    }
    csv.parse(data, function(error, data){
      if (error) {
        throw error;
      }
      deleteContact(data);
    });
  });
};
