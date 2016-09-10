var fs = require('fs');
var csv = require('csv');
var prompt = require('prompt-sync')();
var colors = require('colors');

// ----- MAIN FUNCTIONS ----- //
function processCsv(filename, callback) {
  fs.readFile(filename, function(err, data) {
    if (err) throw err;

    csv.parse(data, function(err, dataParsed) {
      // triggers when there's an issue parsing the data
      if (err) throw err;
      callback(dataParsed);
    });
  });
};

processCsv('./example.csv', callback);


//function processCsv(file, callback) {
  fs.readFile(file, function(error, data) {
    if (error) {
      throw error
    };
    csv.parse(data, function(error, dataParsed) {
      if (error) {
        throw error
      };
      callback(dataParsed);
    });
  });
};

function writeCsv(filename, data) {
  csv.stringify(data, { header: true }, function(err, data) {
    if (err) throw err;

    fs.writeFile(filename, data, function(error) {
      if (error) {
        throw error;
      }
      console.log('CSV update was successful');
    });
  });
};


// ----- FUNCTIONS RELATED TO COMMANDS ----- //

switch(process.argv[2]) {
  case 'count':
  callback = addClient
  break;
}

function addClient() {
  console.log(data[1]);
  var contact = [];
  console.log("Adding new contact");
  contact.push(prompt("First Name: ")); contact.push(prompt("Last Name: "));
  contact.push(prompt("Phone: "));
  contact.push(prompt("Email: "));
  contact.push(prompt("City: "));
  contact.push(prompt("Zip: "));
  contact.push(prompt("Website: "));
  contact.push(prompt("Company: "));
  // llamar a un callback que escribe
}



// "help" Command
function help() {
  return "This is a contacts application. What follows is a list of " + "commands".yellow + " you can run, along with their descriptions.\n   " + "search".yellow + "- Search for a contact by email and get their information.\n   " + "add".yellow + "- Add a contact to the list.\n   " + "update".yellow + "- Update a contact\'s information in the list.\n   " + "delete".yellow + "- Delete a contact from the list.\n   " + "count".yellow + "- Get the total count of contacts in the list."
};

// "search" Command

// "add" Command
function addContact(data) {
  var contact = [];
  console.log("Adding new Contact");
  contact.push(prompt("First Name: "));    contact.push(prompt("Last Name: "));
  contact.push(prompt("Phone: "));
  contact.push(prompt("Email: "));
  contact.push(prompt("City: "));
  contact.push(prompt("Zip: "));
  contact.push(prompt("Website: "));
  contact.push(prompt("Company: "));
    // we have to add new client to data
  writeCsv(data);
};

// "update" Command
function updateContact(currentData) {
  console.log("Updating Contact: ");
  var currentContact = prompt("Email: ");
  var found = false;
  var update = []

  for (var i = 1; i < currentData.length; i++) {
    if (currentData[i][3] === currentContact) {
      found = true;
      console.log("Enter new data");
      var name = prompt()
    }
  }

  if (!found) {
      console.log("data not found  " + currentContact);
  }
};

// "delete" Command
function deleteContact(currentData) {
  console.log("Delete Contact ");
  var currentContact = prompt("Email: ");
  var found = false;
  for (var i = 1; i < currentData.length; i++) {
    if (currentData[i][3] === currentContact) {
      found = true;
      console.log("Contact Deleted");
      return currentData.splice(i, 1);
    }
  }
  if (!found) {
    console.log("Contact " + currentContact + " was not found.");
    //return currentData;
  }
}

// "count" Command
function showCount() {
  return data.length - 1;
}


// ----- PROGRAM EXECUTION ----- //

var argument = process.argv[2];

if (argument === 'count') {
  processCsv('./example.csv', showCount);
};

if (argument === 'add') {
  processCsv('./example.csv', addClient);
};

if (argument === 'help') {
  console.log(help());
};
