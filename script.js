function validateForm() {
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const country = document.getElementById("country").value;

  if (!username || !email || !password || !country) {
    alert("Please fill in all required fields.");
    return false;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return false;
  }

  return true;
}
