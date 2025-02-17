/* 
Create a form with a required name and email field.
Write JavaScript to:
- Prevent form submission if either field is empty.
- Display an error message if fields are missing. 
*/

function myForm(event) {
  event.preventDefault();
  const username = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const errorMessage = document.getElementById("errorMessage");

  errorMessage.textContent = "";

  if (username == "") {
    errorMessage.textContent = "Name is required!!";
    return;
  }
  if (email == "") {
    errorMessage.textContent = "Email is required!!";
    return;
  }
  console.log("form submitted: ", username, email);
}
document.getElementById("myForm").addEventListener("submit", myForm);
