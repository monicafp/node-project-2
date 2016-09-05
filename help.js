var colors = require('colors');

function help(){
  return "This is a contacts application. What follows is a list of " + "commands".yellow + " you can run, along with their corresponding actions.\n   " + "Search".yellow + "- Search for a contact by email and get their information.\n   " + "Add".yellow + "- Add a contact to the list.\n   " + "Update".yellow + "- Update a contact\'s information in the list.\n   " + "deleteContact".yellow + "- Delete a contact from the list.\n   " + "Total".yellow + "- Get the total count of contacts in the list."
};

module.exports = help;
