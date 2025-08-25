document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");
  const loginForm = document.getElementById("loginForm");

  // Signup
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("signupName").value;
      const email = document.getElementById("signupEmail").value;
      const password = document.getElementById("signupPassword").value;

      // Save user (demo only, not secure!)
      localStorage.setItem("user", JSON.stringify({ name, email, password }));
      alert("Signup successful! Please login.");
      signupForm.reset();

      // Switch to login tab
      document.querySelector('#login-tab').click();
    });
  }

  // Login
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;

      const user = JSON.parse(localStorage.getItem("user"));

      if (user && user.email === email && user.password === password) {
        window.location.href = "home.html";
      } else {
        alert("Invalid credentials. Please try again.");
      }
    });
  }
});
