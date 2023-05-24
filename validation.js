function validateForm() {
  // get the input elements
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let message = document.getElementById("message");

  // check if the name input is empty
  if (name.value == "") {
    // set a custom message and report it
    name.setCustomValidity("Name must be filled out");
    name.reportValidity();
    // return false to prevent the form from being submitted
    return false;
  }

  // check if the email input is invalid
  if (!email.checkValidity()) {
    // set a custom message and report it
    email.setCustomValidity("Please enter a valid email address");
    email.reportValidity();
    // return false to prevent the form from being submitted
    return false;
  }

  // check if the message input is empty
  if (message.value == "") {
    // set a custom message and report it
    message.setCustomValidity("Message must be filled out");
    message.reportValidity();
    // return false to prevent the form from being submitted
    return false;
  }

  // if all inputs are valid, return true and submit the form
  return true;
}
  