var fs = require('fs');
var csv = require('csv');

function totalContacts(){

function countContacts(data) {
  console.log(data.length -1);
  return data.length -1;
};


fs.readFile('./example.csv', function(error, data){
  if (error) {
    throw error;
  }
  csv.parse(data, function(error, data){
    if (error) {
      throw error;
    }
    countContacts(data);
    // console.log(data.length -1);
    // return data.length -1;
  });
});

};


module.exports = totalContacts;
