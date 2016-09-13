var argument = process.argv[2];
var functions = require('./functions');

switch(process.argv[2]) {
  case 'help':
    console.log(functions.help());
    process.exit(-1);
    break;

  case 'count':
    callback = functions.showCount;
    break;

  case 'add':
    callback = functions.addContact;
    break;

  case 'update':
    callback = functions.updateContact;
    break;

  case 'delete':
    callback = functions.deleteContact;
    break;

  case 'search':
    callback = functions.searchContact;
    break;

  default:
    console.log("Command not found.");
    process.exit(-1);
    break;
}

functions.processCsv('./example.csv', callback);
