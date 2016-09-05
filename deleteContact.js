var prompt = require('prompt-sync')();

function deleteContact(data) {
  var contactEmail = prompt("Enter contact\'s email to delete: ");
  var found = false;
  for (var i = 1; i < data.length; i++) {
    if (data[i][3] === contactEmail) {
      found = true;
      console.log("Contact Deleted");
      return data.splice(i, 1);
      // writeFile?
    }
  }
  if (!found) {
    console.log("Data for \"" + contactEmail + "\" was not found. ");
    return data;
  }
};

module.exports = deleteContact;
