// Log to confirm the web app has loaded
console.log('Web app loaded!');
 
// Listen for a custom event from Salesforce
window.addEventListener('message', function(event) {
  // Verify the event origin to ensure it's coming from Salesforce
if (event.origin === 'https://platform.salesforce.com') {
const data = event.data;
 
    // Check for a specific event type
    if (data.type === 'customEvent') {
      console.log('Received event from Salesforce:', data.payload);
 
      // Example: Use payload to populate the email field
if (data.payload.email) {
document.getElementById('email').value = data.payload.email;
      }
 
      // Perform any additional logic based on the received event
      handleSalesforceEvent(data.payload);
    }
  }
});
 
// Example function to handle received events
function handleSalesforceEvent(payload) {
  console.log('Handling event payload:', payload);
  // Add your custom logic here, like pre-filling form fields
}
 
// Example of sending an event back to Salesforce
function sendToSalesforce() {
  window.parent.postMessage(
    {
      type: 'customEvent',
      payload: { key: 'value', message: 'Hello Salesforce!' }
    },
'https://platform.salesforce.com'
  );
}
 
// Toggle password visibility
function togglePassword() {
  const passwordField = document.getElementById("password");
  if (passwordField.type === "password") {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
}
 
// Handle form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  console.log('Login form submitted.');
 
  // Example: Send an event back to Salesforce on form submission
  sendToSalesforce();
 
  // Show an alert for testing
  alert("Login functionality can be implemented here.");
});