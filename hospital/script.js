document.getElementById('appointmentForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  
  // Send the data to the server (backend)
  var data = {
    name: name,
    email: email,
    message: message
  };
